import { Global, css } from "@emotion/react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/system";
import React from "react";
import grey from "../colors/grey";
import { borderTokens, heightTokens, shadowTokens, spacingTokens, widthTokens } from "../tokens";
import { Color, components, shape, themeColors, typography } from "./theme";

interface ProviderProps {
  children: React.ReactNode;
  color?: Color
}

export function Provider({ children, color }: ProviderProps) {
  const themeColor = themeColors[color || "randmar"];

  const theme = createTheme({
    palette: {
      primary: {
        main: themeColor[700],
        contrastText: "#fff",
      },
      secondary: {
        main: grey[700],
        contrastText: "#fff",
      }
    },
    typography,
    shape,
  });

  theme.components = components(theme);

  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
}