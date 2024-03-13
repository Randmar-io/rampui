import { User } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface ImageProps {
  src: string;
  alt: string;
  size?: "xs" | "sm" | "md" | "lg";
}

export function Image({ src, alt, size }: ImageProps) {
  const [error, setError] = useState(false);

  const imageStyle = {
    width: '96px',
    aspectRatio: '1/1',
    borderRadius: 8,
    border: "1px solid #e3e3e3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  if (error)
    return (
      <div style={{ ...imageStyle, backgroundColor: "#fafafa" }}>
        <User size={24} color="#949494" />
      </div>
    )

  return (
    <motion.img
      layout="position"
      src={src}
      onError={() => setError(true)}
      alt={alt}
      style={{ ...imageStyle, objectFit: "contain" }}
    />
  )
}