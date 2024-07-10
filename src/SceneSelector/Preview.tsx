import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { Play } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Modal } from "../Modal";
import { grey, red } from "../colors";

interface PreviewProps {
  sceneName: string;
}

export default function Preview({ sceneName }: PreviewProps) {
  const [open, setOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string>();
  const [audioUrl, setAudioUrl] = useState<string>();
  const [loading, setLoading] = useState(false);

  async function handlePlayClick(e: React.MouseEvent) {
    e.stopPropagation();
    setOpen(true);
    setLoading(true);
    const vidUrl = await fetchMediaUrl('Preview');
    const audioUrl = await fetchMediaUrl('AmbientSound');
    setVideoUrl(vidUrl);
    setAudioUrl(audioUrl);
    setLoading(false);
  }

  async function fetchMediaUrl(media: 'Preview' | 'AmbientSound') {
    const res = await fetch(`https://api.randmar.io/ShortsGenerationContent/Scene/${encodeURIComponent(sceneName)}/${media}`);
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    return url;
  }

  return (
    <>
      <Box
        onClick={handlePlayClick}
        sx={{
          display: "flex",
          backgroundColor: "white",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "4px",
          right: "4px",
          cursor: "pointer",
          color: grey[500],
          ":hover": {
            backgroundColor: red[50],
            color: red[600]
          }
        }}
      >
        <Play size={14} weight="bold" />
      </Box>

      <Modal open={open} onClose={() => setOpen(false)} flush hideCloseIcon maxWidth={false}>
        {
          loading ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', aspectRatio: '9 / 16' }}>
              <CircularProgress />
            </div>
            :
            <>
              <video
                autoPlay
                loop
                style={{
                  height: '90vh',
                  aspectRatio: "9 / 16",
                  objectFit: "cover",
                }}
                src={videoUrl}
              />
              <audio
                autoPlay
                loop
                src={audioUrl}
              />
            </>

        }
      </Modal>
    </>
  );
}