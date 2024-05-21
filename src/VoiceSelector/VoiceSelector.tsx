import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { Pause, Play } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import grey from "../colors/grey";
import red from "../colors/red";

export enum Voice {
  Andrew = 'en-US-AndrewMultilingualNeural',
  Brian = 'en-US-BrianMultilingualNeural',
  Davis = 'en-US-DavisNeural',
  Emma = 'en-US-EmmaMultilingualNeural',
  Nancy = 'en-US-NancyNeural',
  Sara = 'en-US-SaraNeural',
}

const displayName = {
  [Voice.Andrew]: 'Andrew',
  [Voice.Brian]: 'Brian',
  [Voice.Davis]: 'Davis',
  [Voice.Emma]: 'Emma',
  [Voice.Nancy]: 'Nancy',
  [Voice.Sara]: 'Sara',
};

export interface VoiceSelectorProps {
  voice: Voice;
  setVoice: (voice: Voice) => void;

}

export function VoiceSelector({ voice, setVoice }: VoiceSelectorProps) {
  return (
    <div>
      <p style={{ fontSize: 12, color: "#616161", marginBottom: 4 }}>Voice</p>
      <Grid container spacing={1}>
        {
          Object.values(Voice).map((v, i) => (
            <Grid item key={i} xs={6} md={4}>
              <VoiceOption voice={v} selected={voice === v} setSelected={setVoice} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  )
}

interface VoiceOptionProps {
  voice: Voice;
  selected: boolean;
  setSelected: (voice: Voice) => void;
}

function VoiceOption({ voice, selected, setSelected }: VoiceOptionProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = new Audio(`https://api.randmar.io/ShortsGenerationContent/Voices/${voice}.mp3`);

  useEffect(() => {
    return () => {
      sound.pause();
      sound.removeEventListener('ended', handleAudioEnded);
    };
  }, []);

  const togglePlay = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  sound.addEventListener('ended', handleAudioEnded);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      onClick={() => setSelected(voice)}
      sx={{
        p: 1,
        pl: 1.5,
        border: `1px solid ${selected ? red[600] : '#c4c4c4'}`,
        color: selected ? red[700] : grey[600],
        borderRadius: 1,
        cursor: "pointer",
        fontSize: 13,
        backgroundColor: selected ? red[50] : "white",
        userSelect: "none",
        fontWeight: selected ? 500 : 400,

        ":hover": {
          backgroundColor: red[50],
        },
      }}
    >
      <span>{displayName[voice]}</span>
      <audio
        ref={audioRef}
        src={`https://api.randmar.io/ShortsGenerationContent/Voices/${voice}.mp3`}
      />
      <Button
        variant="tertiary"
        onClick={togglePlay}
        iconOnly
        starticon={isPlaying ? Pause : Play}
        size="small"
        iconProps={{ color: selected ? red[600] : grey[500] }}
      />
    </Stack>
  );
}