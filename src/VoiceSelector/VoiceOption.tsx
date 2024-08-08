import { Tooltip } from "@mui/material";
import { Stack } from "@mui/system";
import { Pause, Play } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import { grey, red } from "../colors";
import { StyleSelect } from "./StyleSelect";
import { VoiceSelectorProps } from "./VoiceSelector";
import { VoiceData, voiceDisplayName } from "./voiceData";

interface VoiceOptionProps extends VoiceSelectorProps {
  voice: VoiceData;
}

export function VoiceOption({ voice, selectedVoice, setSelectedVoice, generateTTSUrl }: VoiceOptionProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedVoiceStyle, setSelectedVoiceStyle] = useState<string>();
  const isSelected = voice.shortName === selectedVoice.name;

  const styleNames = voice.properties.VoiceStyleNames || "";

  useEffect(() => {
    if (isSelected) setSelectedVoiceStyle(selectedVoice.style);
  }, []);

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
    if (selectedVoiceStyle) {
      getAndSetAudioUrl();
    }
  }, [selectedVoiceStyle]);

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
      const audioUrl = await generateTTSUrl(voice.shortName, selectedVoiceStyle);
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

  useEffect(() => {
    if (selectedVoice.name === voice.shortName)
      setSelectedVoice({ name: voice.shortName, style: selectedVoiceStyle });
  }, [selectedVoiceStyle]);

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    setSelectedVoice({ name: voice.shortName, style: selectedVoiceStyle });
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      onClick={handleClick}
      sx={{
        p: 1,
        pl: 1.5,
        height: 44,
        border: `1px solid ${isSelected ? red[400] : grey[200]}`,
        color: isSelected ? red[600] : grey[600],
        borderRadius: 1,
        cursor: "pointer",
        fontSize: 13,
        backgroundColor: isSelected ? red[50] : "white",
        userSelect: "none",
        fontWeight: isSelected ? 500 : 400,

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
            selectedStyle={selectedVoiceStyle}
            setSelectedStyle={setSelectedVoiceStyle}
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
              iconProps={{ color: isSelected ? red[600] : grey[300] }}
              loading={loading}
            />
          </Tooltip>
        }
      </span>
    </Stack>
  );
}