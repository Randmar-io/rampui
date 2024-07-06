import { Grid, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { grey, red } from "../colors";

export enum Scene {
  Cozy = "Cozy",
  Office = "Office",
  Art = "Art",
  Dock = "Dock",
  Retail = "Retail",
  White = "White",
}

export interface SceneSelectorProps {
  selectedScene: Scene;
  setSelectedScene: (scene: Scene) => void;

}

export function SceneSelector({ selectedScene, setSelectedScene }: SceneSelectorProps) {
  const SceneImage = styled('img')`
    width: 100%;
    cursor: pointer;
    border-radius: 12px;
    border: 2px solid;
  `;

  return (
    <div>
      <p style={{ fontSize: 12, color: "#616161", marginBottom: 8 }}>Scene</p>
      <Grid container spacing={2}>
        {
          Object.values(Scene).map((s, i) => {
            const selected = selectedScene === s;

            return (
              <Grid item key={i} xs={6} md={4}>
                <Box sx={{
                  borderRadius: '12px',
                  backgroundColor: selected ? red[50] : undefined,
                  ":hover": {
                    backgroundColor: red[50]
                  }
                }}>
                  <SceneImage
                    onClick={() => setSelectedScene(s)}
                    src={`https://api.randmar.io/ShortsGenerationContent/Scene/${s}/Thumbnail`}
                    style={{
                      width: ' 100%',
                      cursor: 'pointer',
                      borderStyle: 'solid',
                      borderWidth: '1px 1px 0 1px',
                      borderRadius: '12px 12px 0 0',
                      borderColor: selected ? red[500] : grey[300],
                      marginBottom: -7,
                    }}
                  />
                  <Box
                    sx={{
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
                    {s}
                  </Box>
                </Box>
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  )
}
