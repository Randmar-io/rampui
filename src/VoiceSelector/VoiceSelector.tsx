import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { Pause, Play } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { Select } from "../Select";
import { grey, red } from "../colors";

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
  generateTTSUrl?: (voiceName: string) => Promise<string>;
}

export function VoiceSelector({ selectedVoice, setSelectedVoice, generateTTSUrl }: VoiceSelectorProps) {
  const [voiceGender, setVoiceGender] = useState<string>('Female');
  const [selectedVoices, setSelectedVoices] = useState<Voice[]>(voices["Female"]);

  useEffect(() => {
    if ((voiceGender === "Male" || voiceGender === "Female"))
      setSelectedVoices(voices[voiceGender]);
  }, [voiceGender]);

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
          selectedVoices.map((v, i) => (
            <Grid item key={i} xs={6} md={3}>
              <VoiceOption voice={v} selected={selectedVoice === v} setSelected={setSelectedVoice} generateTTSUrl={generateTTSUrl} />
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
  generateTTSUrl?: (voiceName: string) => Promise<string>;
}

function VoiceOption({ voice, selected, setSelected, generateTTSUrl }: VoiceOptionProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAudioUrl('');
  }, [voice, generateTTSUrl]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      audioRef.current?.removeEventListener('ended', handleAudioEnded);
    };
  }, []);

  useEffect(() => {
    if (!audioUrl) return;
    audioRef.current?.addEventListener('canplay', handleCanPlay);
    return () => {
      audioRef.current?.removeEventListener('canplay', handleCanPlay);
    };
  }, [audioUrl]);

  const togglePlay = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (!audioUrl) await getAndSetAudioUrl();

      audioRef.current?.addEventListener('canplay', handleCanPlay);
      audioRef.current?.load();
    }
  };

  const getAndSetAudioUrl = async () => {
    if (generateTTSUrl) {
      setLoading(true);
      const audioUrl = await generateTTSUrl(voice);
      setAudioUrl(audioUrl);
      setLoading(false);
    } else {
      setAudioUrl(`https://api.randmar.io/ShortsGenerationContent/Voices/${voice}.mp3`);
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  const handleCanPlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
    audioRef.current?.removeEventListener('canplay', handleCanPlay);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleAudioEnded);
    }
    return () => {
      audioRef.current?.removeEventListener('ended', handleAudioEnded);
      audioRef.current?.removeEventListener('canplay', handleCanPlay);
    };
  }, [audioUrl]);

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
        src={audioUrl}
      />
      <Button
        variant="tertiary"
        onClick={togglePlay}
        iconOnly
        starticon={isPlaying ? Pause : Play}
        size="small"
        iconProps={{ color: selected ? red[600] : grey[500] }}
        loading={loading}
      />
    </Stack>
  );
}