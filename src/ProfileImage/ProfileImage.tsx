import { Play } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Image, imgSizeMap } from "../Image";
import { VideoModal } from "../VideoModal";
import { Size } from "../utility/Types";

export interface ProfileImageProps {
  applicationId: string;
  size?: Size;
}

export function ProfileImage({ applicationId, size = "xs" }: ProfileImageProps) {
  const [open, setOpen] = useState(false);
  const imgSize = imgSizeMap[size];

  return (
    <React.Fragment>
      <Image
        style={{ flexShrink: 0 }}
        size={size}
        src={`https://api.randmar.io/v4/Partner/${applicationId}/Account/Logo?height=${imgSize * 1.5}&width=${imgSize * 1.5}`}
        onClick={() => setOpen(true)}
        hoverIcon={Play}
      />
      <VideoModal open={open} setOpen={setOpen} videoUrl={`https://api.randmar.io/v4/Partner/${applicationId}/Account/Video`} />
    </React.Fragment>
  )
}