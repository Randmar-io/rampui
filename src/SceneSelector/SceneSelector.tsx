import { Grid, InputAdornment } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { ArrowLeft, ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import { Link } from "../Link";
import { Select } from "../Select";
import { TextField } from "../TextField";
import { Typography } from "../Typography";
import { grey, red } from "../colors";
import { useDebounce } from "../utility/Debounce";
import Preview from "./Preview";
import { CategorizedScenes, Scene, categoryMapping } from "./Scene";

export interface SceneSelectorProps {
  selectedScene: string;
  setSelectedScene: (sceneName: string) => void;
  itemColSpan?: number;
}

export function SceneSelector({ selectedScene, setSelectedScene, itemColSpan }: SceneSelectorProps) {
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [categorizedScenes, setCategorizedScenes] = useState<CategorizedScenes>({ "Default": [] });
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryMapping[selectedScene] || "Default");
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const scenesPerPage = 12;
  const startIndex = (currentPage - 1) * scenesPerPage;
  const endIndex = startIndex + scenesPerPage;

  useEffect(() => {
    fetchScenesAndCategorize();
  }, []);

  async function fetchScenesAndCategorize() {
    try {
      const response = await fetch('https://api.randmar.io/ShortsGenerationContent/Scenes');
      const scenes: Scene[] = await response.json();

      setScenes(scenes);

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

      const sceneIndex = scenes.findIndex(scene => scene.Name === selectedScene);
      if (sceneIndex !== -1) {
        const category = categoryMapping[selectedScene] || "Other";
        setSelectedCategory(category);

        const sceneIndex = updatedCategorizedScenes[category].findIndex(scene => scene.Name === selectedScene);
        const pageNumber = Math.floor(sceneIndex / scenesPerPage) + 1;
        setCurrentPage(pageNumber);
      }
    } catch (error) {
      console.error('Error fetching and categorizing scenes:', error);
    }
  }


  const categories = Object.keys(categorizedScenes).sort((a, b) => {
    if (a === "Default") return -1;
    if (b === "Default") return 1;
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return a.localeCompare(b);
  });

  const handleSetSelectedCategory = (category: string) => {
    setSearchQuery('');
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(1);
    setSearchQuery(e.target.value);
  };

  const debouncedHandleChange = useDebounce(handleChange, 500);

  const filteredScenes = (): Scene[] => {
    if (searchQuery && searchQuery.length > 0) {
      return scenes.filter(scene => scene?.Name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (categorizedScenes && selectedCategory && categorizedScenes[selectedCategory]) {
      return categorizedScenes[selectedCategory];
    }

    return [];
  }

  const totalPages = Math.ceil(filteredScenes().length / scenesPerPage);
  const scenesToDisplay = filteredScenes().slice(startIndex, endIndex);

  const thumbnailStyle = (selected?: boolean) => ({
    width: '100%',
    aspectRatio: '1 / 1',
    borderStyle: 'solid',
    borderWidth: '1px 1px 0 1px',
    borderRadius: '12px 12px 0 0',
    borderColor: selected ? red[500] : grey[300],
  });

  return (
    <div>
      <Typography variant="bodySm" color="subdued" style={{ marginBottom: "4px" }}>Scene</Typography>

      <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" spacing={1} sx={{ marginBottom: "12px" }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Select
            options={categories}
            selected={selectedCategory}
            setSelected={handleSetSelectedCategory}
            sx={{ width: { xs: "100%", md: 200 } }}
          />
          <Link href="https://www.blenderkit.com/asset-gallery?query=category_subtree:scene+order:-quality" external>Explore more scenes</Link>
        </Stack>
        <TextField
          placeholder="Search for scene"
          startAdornment={
            <InputAdornment position="start">
              <MagnifyingGlass weight="bold" />
            </InputAdornment>
          }
          onChange={debouncedHandleChange}
        />
      </Stack>

      <Grid container spacing={2}>
        {
          searchQuery && searchQuery.length > 1 && scenesToDisplay.length === 0 ?
            <Grid item xs={12}>
              <Typography variant="bodyMd" color="subdued" align="center" style={{ padding: "32px" }}>
                No scenes found
              </Typography>
            </Grid>
            :
            scenesToDisplay.map((scene, i) => {
              const selected = selectedScene === scene?.Name;

              return (
                <Grid item key={i} xs={itemColSpan || 6} md={itemColSpan || 3} lg={itemColSpan || 2}>
                  <Stack
                    onClick={() => setSelectedScene(scene?.Name)}
                    sx={{
                      height: '100%',
                      borderRadius: '12px',
                      backgroundColor: selected ? red[50] : undefined,
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: red[50]
                      }
                    }}
                  >
                    {
                      scene.Thumbnail ?
                        <div style={{ position: "relative", userSelect: "none", }}>
                          <img
                            src={`https://api.randmar.io/ShortsGenerationContent/Scene/${scene?.Name}/Thumbnail`}
                            key={scene?.Name}
                            style={{
                              ...thumbnailStyle(selected),
                              borderColor: selected ? red[400] : grey[300],
                              display: 'block',
                              objectFit: 'cover',
                            }}
                          />
                          {
                            scene.Preview &&
                            <Preview sceneName={scene.Name} />
                          }
                        </div>
                        :
                        <div style={{
                          ...thumbnailStyle(selected),
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
                        borderColor: selected ? red[400] : grey[300],
                        color: selected ? red[700] : grey[600],
                        cursor: "pointer",
                        fontSize: 13,
                        backgroundColor: 'inherit',
                        userSelect: "none",
                        fontWeight: selected ? 500 : 400,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
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
  )
}