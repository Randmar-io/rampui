import styled from "@emotion/styled";
import { MagnifyingGlassPlus, Icon as PhosphorIcon } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Modal } from "../Modal";

export const imgSizeMap = {
  xs: 48,
  sm: 64,
  md: 96,
  lg: 144,
  xl: 192,
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  fullSizeSrc?: string;
  aspectRatio?: string;
  width?: string | number;
  zoomable?: boolean;
  backgroundColor?: string;
  hoverIcon?: PhosphorIcon;
  onClick?: () => void;
}

export function Image({ src, fullSizeSrc, alt, style, hoverIcon: HoverIcon, onClick, size, aspectRatio, zoomable, backgroundColor }: ImageProps) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const isInteractive = onClick !== undefined || (!!src && zoomable);
  const imgSize = imgSizeMap[size || "md"];

  const baseStyle = {
    width: imgSize,
    maxWidth: 'max-content',
    height: 'max-content',
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
    } else if (zoomable && !!src) {
      setOpen(true);
      setHovered(false);
    }
  };

  return (
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
          src={src || "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"}
          alt={alt}
          style={{ ...baseStyle, position: 'relative', objectFit: "contain", borderRadius: 8, aspectRatio: aspectRatio || '1 / 1' }}
        />
        {
          isInteractive &&
          <Overlay>
            {HoverIcon ? <HoverIcon {...hoverIconStyle} /> : <MagnifyingGlassPlus {...hoverIconStyle} />}
          </Overlay>
        }
      </div>
      <Modal open={open} onClose={() => setOpen(false)} maxWidth="sm">
        <img
          src={fullSizeSrc || src || "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"}
          alt={alt}
          style={{ width: "100%", objectFit: "contain" }}
        />
      </Modal>
    </>
  );
};