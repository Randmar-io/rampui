import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { Pause, Play } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Select } from "../Select";
import grey from "../colors/grey";
import red from "../colors/red";

export enum Voice {
  Andrew = 'en-US-AndrewMultilingualNeural',
  Aria = 'en-US-AriaNeural',
  Ava = 'en-US-AvaMultilingualNeural',
  Brandon = 'en-US-BrandonNeural',
  Jacob = 'en-US-JacobNeural',
  Jane = 'en-US-JaneNeural',
  Jenny = 'en-US-JennyNeural',
  Tony = 'en-US-TonyNeural',
}

const displayName = {
  [Voice.Andrew]: 'Andrew',
  [Voice.Aria]: 'Aria',
  [Voice.Ava]: 'Ava',
  [Voice.Brandon]: 'Brandon',
  [Voice.Jacob]: 'Jacob',
  [Voice.Jane]: 'Jane',
  [Voice.Jenny]: 'Jenny',
  [Voice.Tony]: 'Tony',
};

const voices = {
  Female: [Voice.Aria, Voice.Ava, Voice.Jane, Voice.Jenny],
  Male: [Voice.Andrew, Voice.Brandon, Voice.Jacob, Voice.Tony],
};

export interface VoiceSelectorProps {
  selectedVoice: Voice;
  setSelectedVoice: (voice: Voice) => void;
}

export function VoiceSelector({ selectedVoice, setSelectedVoice }: VoiceSelectorProps) {
  const [voiceGender, setVoiceGender] = useState<string>('Female');

  return (
    <div>
      <p style={{ fontSize: 12, color: "#616161", marginBottom: 4 }}>Voice</p>
      <Select
        options={Object.keys(voices)}
        selected={voiceGender}
        setSelected={setVoiceGender}
        sx={{ marginBottom: "12px" }}
      />
      <Grid container spacing={1}>
        {
          (voiceGender === "Male" || voiceGender === "Female") &&
          voices[voiceGender].map((v, i) => (
            <Grid item key={i} xs={6} md={3}>
              <VoiceOption voice={v} selected={selectedVoice === v} setSelected={setSelectedVoice} />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}

interface VoiceOptionProps {
  voice: Voice;
  selected: boolean;
  setSelected: (voice: Voice) => void;
}

function VoiceOption({ voice, selected, setSelected }: VoiceOptionProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener('ended', handleAudioEnded);
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

  audioRef.current?.addEventListener('ended', handleAudioEnded);

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