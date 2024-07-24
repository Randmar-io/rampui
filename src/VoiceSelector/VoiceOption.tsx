import { Stack } from "@mui/system";
import { Pause, Play } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { grey, red } from "../colors";
import { voiceDisplayName } from "./voiceData";

interface VoiceOptionProps {
  voice: string;
  selected: boolean;
  setSelected: (voice: string) => void;
  generateTTSUrl?: (voiceName: string) => Promise<string>;
}

export function VoiceOption({ voice, selected, setSelected, generateTTSUrl }: VoiceOptionProps) {
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
      <span>{voiceDisplayName[voice]}</span>
      <audio
        ref={audioRef}
        src={audioUrl}
      />
      {
        generateTTSUrl &&
        <Button
          variant="tertiary"
          onClick={togglePlay}
          iconOnly
          starticon={isPlaying ? Pause : Play}
          size="small"
          iconProps={{ color: selected ? red[600] : grey[500] }}
          loading={loading}
        />
      }
    </Stack>
  );
}