import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import Filter from "../Filter/Filter";
import { Typography } from "../Typography";
import { VoiceOption } from "./VoiceOption";
import { ageGroups, genders, personalities, stylesMap, stylesReverseMap, tailoredScenarios, voiceData } from "./voiceData";

export interface Voice {
  name: string;
  style?: string;
}

export interface VoiceSelectorProps {
  selectedVoice: Voice;
  setSelectedVoice: (voice: Voice) => void;
  generateTTSUrl?: (voiceName: string, voiceStyle?: string) => Promise<string>;
  itemColSpan?: number;
}

export function VoiceSelector({ selectedVoice, setSelectedVoice, generateTTSUrl, itemColSpan }: VoiceSelectorProps) {
  const [styleFilters, setStyleFilters] = useState<string[]>([]);
  const [genderFilters, setGenderFilters] = useState<string[]>([]);
  const [personalityFilters, setPersonalityFilters] = useState<string[]>([]);
  const [ageGroupFilters, setAgeGroupFilters] = useState<string[]>([]);
  const [tailoredScenarioFilters, setTailoredScenarioFilters] = useState<string[]>([]);
  const [filteredVoices, setFilteredVoices] = useState(voiceData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const voicesPerPage = 12;
  const startIndex = (currentPage - 1) * voicesPerPage;
  const endIndex = startIndex + voicesPerPage;

  useEffect(() => {
    const selectedVoiceIndex = filteredVoices.findIndex(voice => voice.shortName === selectedVoice.name);

    if (selectedVoiceIndex !== -1)
      setCurrentPage(Math.ceil(selectedVoiceIndex / voicesPerPage))
  }, []);

  useEffect(() => {
    let filtered = voiceData;

    if (styleFilters.length > 0) {
      filtered = filtered.filter(voice =>
        styleFilters.every(filter => voice.properties.VoiceStyleNames?.includes(stylesReverseMap[filter]))
      );
    }

    if (genderFilters.length > 0) {
      filtered = filtered.filter(voice =>
        genderFilters.every(filter => voice.properties.Gender?.includes(filter))
      );
    }

    if (personalityFilters.length > 0) {
      filtered = filtered.filter(voice =>
        personalityFilters.every(filter => voice.properties.Personality?.includes(filter))
      );
    }

    if (ageGroupFilters.length > 0) {
      filtered = filtered.filter(voice =>
        ageGroupFilters.every(filter => voice.properties.AgeGroups?.includes(filter))
      );
    }

    if (tailoredScenarioFilters.length > 0) {
      filtered = filtered.filter(voice =>
        tailoredScenarioFilters.every(filter => voice.properties.TailoredScenarios?.includes(filter))
      );
    }

    setFilteredVoices(filtered);
  }, [styleFilters, genderFilters, personalityFilters, ageGroupFilters, tailoredScenarioFilters, voiceData]);

  const totalPages = Math.ceil(filteredVoices.length / voicesPerPage);
  const voicesToDisplay = filteredVoices.slice(startIndex, endIndex);

  return (
    <div>
      <p style={{ fontSize: 12, color: "#616161", marginBottom: 4 }}>Voice</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
        <Filter
          filterName="Style"
          filters={Object.values(stylesMap)}
          selectedFilters={styleFilters}
          setSelectedFilters={setStyleFilters}
        />
        <Filter
          filterName="Personality"
          filters={personalities}
          selectedFilters={personalityFilters}
          setSelectedFilters={setPersonalityFilters}
        />
        <Filter
          filterName="Gender"
          filters={genders}
          selectedFilters={genderFilters}
          setSelectedFilters={setGenderFilters}
        />
        <Filter
          filterName="Age"
          filters={ageGroups}
          selectedFilters={ageGroupFilters}
          setSelectedFilters={setAgeGroupFilters}
        />
        <Filter
          filterName="Scenario"
          filters={tailoredScenarios}
          selectedFilters={tailoredScenarioFilters}
          setSelectedFilters={setTailoredScenarioFilters}
        />

      </div>
      <Grid container spacing={1}>
        {
          voicesToDisplay.map((v, i) => (
            <Grid item key={i} xs={itemColSpan || 6} md={itemColSpan || 3}>
              <VoiceOption
                voice={v}
                selectedVoice={selectedVoice}
                setSelectedVoice={setSelectedVoice}
                generateTTSUrl={generateTTSUrl}
              />
            </Grid>
          ))
        }
      </Grid>
      <Stack direction="row" alignItems="center" justifyContent="space-between" my={1}>
        <Button
          variant="tertiary"
          starticon={ArrowLeft}
          onClick={() => setCurrentPage(prevPage => prevPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Typography variant="bodySm" color="subdued">Page {currentPage} of {totalPages}</Typography>
        <Button
          variant="tertiary"
          endicon={ArrowRight}
          onClick={() => setCurrentPage(prevPage => prevPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </Stack>
    </div>
  );
}