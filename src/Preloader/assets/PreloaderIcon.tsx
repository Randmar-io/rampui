import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import LottiePreloaderBlackIcon from "./animations/LoadingIconBlack.json";
import LottiePreloaderBlueIcon from "./animations/LoadingIconBlue.json";
import LottiePreloaderPurpleIcon from "./animations/LoadingIconPurple.json";
import LottiePreloaderRedIcon from "./animations/LoadingIconRed.json";
import LottiePreloaderWhiteIcon from "./animations/LoadingIconWhite.json";

interface PreloaderIconProps {
  color?: "white" | "red" | "black" | "purple" | "blue"
}

const PreloaderIcon = (props: PreloaderIconProps) => {

  const { color } = props;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Player
        autoplay
        loop
        speed={1}
        style={{ width: 200, aspectRatio: '1 / 1' }}
        src={
          color === "white" ? LottiePreloaderWhiteIcon :
            color === "red" ? LottiePreloaderRedIcon :
              color === "black" ? LottiePreloaderBlackIcon :
                color === "purple" ? LottiePreloaderPurpleIcon :
                  color === "blue" ? LottiePreloaderBlueIcon :
                    LottiePreloaderRedIcon
        } />
    </div>
  )
}

export default PreloaderIcon;