import styled from "@emotion/styled";
import { Image as ImageIcon, MagnifyingGlassPlus, Icon as PhosphorIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

const sizeMap = {
  xs: "48px",
  sm: "64px",
  md: "96px",
  lg: "144px",
  xl: "192px",
}

interface ImageProps {
  src: string;
  alt: string;
  altIcon?: PhosphorIcon;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  aspectRatio?: string;
  width?: string | number;
  zoomable?: boolean;
}

export function Image({ src, alt, altIcon: AltIcon, size, width, aspectRatio, zoomable }: ImageProps) {
  const [error, setError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const baseStyle = {
    width: width || sizeMap[size || "md"],
    aspectRatio: aspectRatio || '1/1',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

  const zoomIconStyle = {
    color: "#fff", // Adjust icon color
    fontSize: "32px", // Adjust icon size
  };

  function handleClick() {
    if (zoomable) {
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

  if (error)
    return (
      <div style={{ ...baseStyle, backgroundColor: "#fafafa", border: "1px solid #e3e3e3", borderRadius: 8 }}>
        {
          AltIcon ?
            <AltIcon size={iconSize()} color="#949494" />
            :
            <ImageIcon size={iconSize()} color="#949494" />
        }
      </div>
    );

  return (
    <>
      <div
        style={{ ...baseStyle, position: 'relative', border: "1px solid #e3e3e3", borderRadius: 8, cursor: zoomable ? "pointer" : "default" }}
        onMouseEnter={() => zoomable && setHovered(true)}
        onMouseLeave={() => zoomable && setHovered(false)}
        onClick={handleClick}
      >
        <motion.img
          layout="position"
          src={src}
          onError={() => setError(true)}
          alt={alt}
          style={{ ...baseStyle, position: 'relative', objectFit: "contain", borderRadius: 8 }}
        />
        {
          zoomable &&
          <Overlay>
            <MagnifyingGlassPlus style={zoomIconStyle} size={24} />
          </Overlay>
        }
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <motion.img
          layout="position"
          src={src}
          onError={() => setError(true)}
          alt={alt}
        />
      </Modal>
    </>
  );
};