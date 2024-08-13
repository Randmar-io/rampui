import React from "react";
import { Modal } from "../Modal";

interface VideoModalProps {
  videoUrl: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  videoComponentProps?: React.HTMLAttributes<HTMLVideoElement>;
}

export function VideoModal({ videoUrl, open, setOpen, videoComponentProps }: VideoModalProps) {
  function handleClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    e.preventDefault();
    setOpen(false);
  }

  return (
    <Modal open={open} onClose={handleClose} flush hideCloseIcon maxWidth={false}>
      <video
        controls
        autoPlay
        loop
        style={{
          height: '80vh',
          aspectRatio: "9 / 16",
          objectFit: "cover",
        }}
        src={videoUrl}
        {...videoComponentProps}
      />
    </Modal>
  )
}