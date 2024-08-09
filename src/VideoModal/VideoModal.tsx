import React from "react";
import { Modal } from "../Modal";

interface VideoModalProps {
  videoUrl: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  videoComponentProps?: React.HTMLAttributes<HTMLVideoElement>;
}

export function VideoModal({ videoUrl, open, setOpen, videoComponentProps }: VideoModalProps) {
  return (
    <Modal open={open} onClose={() => setOpen(false)} flush hideCloseIcon maxWidth={false}>
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