import { Tooltip } from "@mui/material";
import { Stack } from "@mui/system";
import { Pause, Play } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { grey, red } from "../colors";
import { StyleSelect } from "./StyleSelect";
import { VoiceData, voiceDisplayName } from "./voiceData";

interface VoiceOptionProps {
  voice: VoiceData;
  selectedVoiceName: boolean;
  setSelectedVoiceName: (voice: string) => void;
  generateTTSUrl?: (voiceName: string, voiceStyle?: string) => Promise<string>;
}

export function VoiceOption({ voice, selectedVoiceName, setSelectedVoiceName, generateTTSUrl }: VoiceOptionProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>();

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

  useEffect(() => {
    if (selectedStyle) {
      getAndSetAudioUrl();
    }
  }, [selectedStyle]);

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
      const audioUrl = await generateTTSUrl(voice.shortName, selectedStyle);
      setAudioUrl(audioUrl);
      setLoading(false);
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

  const styleNames = voice.properties.VoiceStyleNames || "";

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      onClick={() => setSelectedVoiceName(voice.shortName)}
      sx={{
        p: 1,
        pl: 1.5,
        border: `1px solid ${selectedVoiceName ? red[600] : '#c4c4c4'}`,
        color: selectedVoiceName ? red[700] : grey[600],
        borderRadius: 1,
        cursor: "pointer",
        fontSize: 13,
        backgroundColor: selectedVoiceName ? red[50] : "white",
        userSelect: "none",
        fontWeight: selectedVoiceName ? 500 : 400,

        ":hover": {
          backgroundColor: red[50],
        },
      }}
    >
      <span>{voiceDisplayName[voice.shortName]}</span>
      <audio
        ref={audioRef}
        src={audioUrl}
      />
      <span style={{ display: "flex", alignItems: "center" }}>
        {
          styleNames.length > 0 &&
          <StyleSelect
            styles={styleNames.split(",")}
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
        }
        {
          generateTTSUrl &&
          <Tooltip title="Play">
            <Button
              variant="tertiary"
              onClick={togglePlay}
              iconOnly
              starticon={isPlaying ? Pause : Play}
              size="small"
              iconProps={{ color: selectedVoiceName ? red[600] : grey[500] }}
              loading={loading}
            />
          </Tooltip>
        }
      </span>
    </Stack>
  );
}