import { Global, ThemeProvider, css } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import grey from "../colors/grey";
import { borderTokens, heightTokens, shadowTokens, spacingTokens, widthTokens } from "../tokens";
import { Color, baseThemeColor, components } from "./theme";

import { createContext } from 'react';
import { dataGridStyles } from "../DataGrid";

export const ThemeContext = createContext<Color>('randmar');

interface ProviderProps {
  children: React.ReactNode;
  color?: Color
}

export function Provider({ children, color }: ProviderProps) {
  const primaryColor = baseThemeColor[color || "randmar"];

  const muiTheme = createTheme({
    palette: {
      primary: {
        main: primaryColor[500],
        contrastText: "#fff",
        light: primaryColor[100]
      },
      secondary: {
        main: grey[500],
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: "Inter, Arial, sans-serif",
      allVariants: {
        color: "#414141"
      },
    },
    shape: {
      borderRadius: 12,
    },
  });

  muiTheme.components = components(muiTheme);

  const theme = {
    color: primaryColor
  }

  return (
    <MuiThemeProvider theme={muiTheme}>
      {/* @ts-expect-error */}
      <ThemeProvider theme={theme}>
        <Global styles={css`
            ${borderTokens}
            ${heightTokens}
            ${shadowTokens}
            ${spacingTokens}
            ${widthTokens}
            ${dataGridStyles}

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              min-width: 0;
            }

            *::-webkit-scrollbar {
              width: 16px;
              border-top-right-radius: inherit;
              border-bottom-right-radius: inherit;
            }

            *::-webkit-scrollbar-thumb {
              background: #dcdcdc;
              border: 4px transparent solid;
              border-radius: 8px;
              background-clip: padding-box;
            }

            *::-webkit-scrollbar-thumb:hover {
              background-color: #c4c4c4;
            }

            *::-webkit-scrollbar-thumb:active {
              background-color: #bababa;
            }

            *::-webkit-scrollbar-button {
              display: none;
            }

            body {
              background-color: #f8f8f8;
              font-family: 'Inter', sans-serif;
              color: #262626;
              font-size: 13px;
            }

            button {
              font-family: inherit;
            }
          `} />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
}