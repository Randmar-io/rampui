import { Box } from "@mui/system";
import { Play } from "@phosphor-icons/react";
import React, { useState } from "react";
import { VideoModal } from "../VideoModal";
import { grey, red } from "../colors";

interface PreviewProps {
  sceneName: string;
}

export default function Preview({ sceneName }: PreviewProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box
        onClick={() => setOpen(true)}
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

      <VideoModal
        open={open}
        setOpen={setOpen}
        videoUrl={`https://api.randmar.io/ShortsGenerationContent/Scene/${encodeURIComponent(sceneName)}/Preview`}
      />
    </>
  );
}