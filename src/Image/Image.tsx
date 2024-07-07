import styled from "@emotion/styled";
import { Image as ImageIcon, MagnifyingGlassPlus, Icon as PhosphorIcon } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";

const sizeMap = {
  xs: "48px",
  sm: "64px",
  md: "96px",
  lg: "144px",
  xl: "192px",
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  altIcon?: PhosphorIcon;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  aspectRatio?: string;
  width?: string | number;
  zoomable?: boolean;
  backgroundColor?: string;
  hoverIcon?: PhosphorIcon;
  onClick?: () => void;
}

export function Image({ src, alt, style, altIcon: AltIcon, hoverIcon: HoverIcon, onClick, size, aspectRatio, zoomable, backgroundColor }: ImageProps) {
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const isInteractive = zoomable || onClick !== undefined;

  useEffect(() => {
    if (!src) {
      setError(true);
      return;
    };

    const imageDoesExist = async () => {
      try {
        const response = await fetch(src);
        if (response.ok) return true;
        else return false;
      } catch (error) {
        return false;
      }
    }

    imageDoesExist().then(exists => setError(!exists));
  }, [src]);

  const baseStyle = {
    width: sizeMap[size || "md"],
    maxWidth: 'max-content',
    aspectRatio: aspectRatio || '1/1',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundColor || "white",
  };

  const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: ${hovered ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  `;

  const hoverIconStyle = {
    color: "#fff",
    size: 24,
  };

  function handleClick() {
    if (onClick) {
      setHovered(false);
      onClick()
    } else if (zoomable) {
      setOpen(true);
      setHovered(false);
    }
  };

  function iconSize() {
    let imageSize;
    if (typeof baseStyle.width === "string") imageSize = parseInt(baseStyle.width);
    else imageSize = baseStyle.width;

    return imageSize / 5 + 8;
  }

  const mainMarkup = (
    <>
      <div
        style={{
          ...baseStyle,
          position: 'relative',
          border: "1px solid #e3e3e3",
          borderRadius: 8,
          cursor: isInteractive ? "pointer" : undefined,
          ...style
        }}
        onMouseEnter={() => isInteractive && setHovered(true)}
        onMouseLeave={() => isInteractive && setHovered(false)}
        onClick={handleClick}
      >
        <img
          src={src}
          onLoad={() => setError(false)}
          onError={() => setError(true)}
          alt={alt}
          style={{ ...baseStyle, position: 'relative', objectFit: "contain", borderRadius: 8 }}
        />
        {
          isInteractive &&
          <Overlay>
            {HoverIcon ? <HoverIcon {...hoverIconStyle} /> : <MagnifyingGlassPlus {...hoverIconStyle} />}
          </Overlay>
        }
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <img
          src={src}
          style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain" }}
          onLoad={() => setError(false)}
          onError={() => setError(true)}
          alt={alt}
        />
      </Modal>
    </>
  );

  if (error)
    return (
      <div
        style={{
          position: 'relative',
          width: sizeMap[size || "md"],
          aspectRatio: "1 / 1",
          backgroundColor: "#fafafa",
          border: "1px solid #e3e3e3",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: onClick ? "pointer" : undefined,
        }}
        onMouseEnter={() => onClick && setHovered(true)}
        onMouseLeave={() => onClick && setHovered(false)}
        onClick={handleClick}
      >
        {
          AltIcon ?
            <AltIcon size={iconSize()} color="#949494" />
            :
            <ImageIcon size={iconSize()} color="#949494" />
        }
        {
          onClick &&
          <Overlay>
            {HoverIcon ? <HoverIcon {...hoverIconStyle} /> : <MagnifyingGlassPlus {...hoverIconStyle} />}
          </Overlay>
        }
      </div>
    );

  return mainMarkup;
};