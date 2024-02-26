import { Global, ThemeProvider, css } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";
import grey from "../colors/grey";
import { borderTokens, heightTokens, shadowTokens, spacingTokens, widthTokens } from "../tokens";
import { Color, baseThemeColor, components, shape, typography } from "./theme";

import { createContext } from 'react';

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
    typography,
    shape,
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

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              min-width: 0;
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