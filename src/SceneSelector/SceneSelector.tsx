import { Grid } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Select } from "../Select";
import { Typography } from "../Typography";
import { grey, red } from "../colors";
import Preview from "./Preview";
import { CategorizedScenes, Scene, categoryMapping } from "./Scene";

export interface SceneSelectorProps {
  selectedScene: string;
  setSelectedScene: (sceneName: string) => void;
}

export function SceneSelector({ selectedScene, setSelectedScene }: SceneSelectorProps) {
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [categorizedScenes, setCategorizedScenes] = useState<CategorizedScenes>({ "Default": [] });
  const [selectedCategory, setSelectedCategory] = useState<string>("Default");

  useEffect(() => {
    async function fetchScenesAndCategorize() {
      try {
        const response = await fetch('https://api.randmar.io/ShortsGenerationContent/Scenes');
        const scenes: Scene[] = await response.json();

        const updatedCategorizedScenes: CategorizedScenes = {
          "Default": []
        };

        for (let scene of scenes) {
          const sceneCategory = categoryMapping[scene?.Name] || "Other";

          if (!updatedCategorizedScenes[sceneCategory]) {
            updatedCategorizedScenes[sceneCategory] = [];
          }

          updatedCategorizedScenes[sceneCategory].push(scene);
        }

        setCategorizedScenes(updatedCategorizedScenes);
        setSelectedCategory("Default");
      } catch (error) {
        console.error('Error fetching and categorizing scenes:', error);
      }
    }

    fetchScenesAndCategorize();
  }, []);

  useEffect(() => {
    if (categorizedScenes[selectedCategory]) {
      setScenes(categorizedScenes[selectedCategory]);
    } else {
      setScenes([]);
    }
  }, [selectedCategory, categorizedScenes]);

  const categories = Object.keys(categorizedScenes).sort((a, b) => {
    if (a === "Default") return -1;
    if (b === "Default") return 1;
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return a.localeCompare(b);
  });

  return (
    <div>
      <Typography variant="bodySm" color="subdued" style={{ marginBottom: "4px" }}>Scene</Typography>

      <Select
        options={categories}
        selected={selectedCategory}
        setSelected={setSelectedCategory}
        sx={{ marginBottom: "12px" }}
      />

      <Grid container spacing={2}>
        {
          scenes && scenes.map((scene, i) => {
            const selected = selectedScene === scene?.Name;

            return (
              <Grid item key={i} xs={6} md={4}>
                <Stack
                  onClick={() => setSelectedScene(scene?.Name)}
                  sx={{
                    height: '100%',
                    borderRadius: '12px',
                    backgroundColor: selected ? red[50] : undefined,
                    ":hover": {
                      backgroundColor: red[50]
                    }
                  }}
                >
                  {
                    scene.Thumbnail ?
                      <div style={{ position: "relative", userSelect: "none" }}>
                        <img
                          src={`https://api.randmar.io/ShortsGenerationContent/Scene/${scene?.Name}/Thumbnail`}
                          style={{
                            width: '100%',
                            aspectRatio: '1 / 1',
                            cursor: 'pointer',
                            borderStyle: 'solid',
                            borderWidth: '1px 1px 0 1px',
                            borderRadius: '12px 12px 0 0',
                            borderColor: selected ? red[500] : grey[300],
                            objectFit: 'cover',
                            marginBottom: '-4px',
                          }}
                        />
                        {
                          scene.Preview &&
                          <Preview sceneName={scene.Name} />
                        }
                      </div>
                      :
                      <div style={{
                        width: '100%',
                        aspectRatio: '1 / 1',
                        cursor: 'pointer',
                        borderStyle: 'solid',
                        borderWidth: '1px 1px 0 1px',
                        borderRadius: '12px 12px 0 0',
                        borderColor: selected ? red[500] : grey[300],
                        backgroundColor: grey[50],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Typography variant="bodySm" color="subdued" align="center">No thumbnail available</Typography>
                      </div>
                  }
                  <Box
                    sx={{
                      flexGrow: 1,
                      p: 1,
                      textAlign: "center",
                      borderStyle: 'solid',
                      borderWidth: '0 1px 1px 1px',
                      borderRadius: '0 0 12px 12px',
                      borderColor: selected ? red[500] : grey[300],
                      color: selected ? red[700] : grey[600],
                      cursor: "pointer",
                      fontSize: 13,
                      backgroundColor: 'inherit',
                      userSelect: "none",
                      fontWeight: selected ? 500 : 400,
                    }}
                  >
                    {scene?.Name}
                  </Box>
                </Stack>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}