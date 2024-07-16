import styled from "@emotion/styled";
import { MagnifyingGlassPlus, Icon as PhosphorIcon } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Modal } from "../Modal";

export const imgSizeMap = {
  xs: "48px",
  sm: "64px",
  md: "96px",
  lg: "144px",
  xl: "192px",
}

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  aspectRatio?: string;
  width?: string | number;
  zoomable?: boolean;
  backgroundColor?: string;
  hoverIcon?: PhosphorIcon;
  onClick?: () => void;
}

export function Image({ src, alt, style, hoverIcon: HoverIcon, onClick, size, aspectRatio, zoomable, backgroundColor }: ImageProps) {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const isInteractive = onClick !== undefined || (!!src && zoomable);

  const baseStyle = {
    width: imgSizeMap[size || "md"],
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
          src={src || "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"}
          alt={alt}
          style={{ maxWidth: "100%", maxHeight: "80vh", objectFit: "contain" }}
        />
      </Modal>
    </>
  );
};