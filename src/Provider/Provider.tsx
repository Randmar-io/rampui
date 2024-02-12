import { Global, css } from "@emotion/react";
import { Theme, ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/system";
import React from "react";
import { borderTokens, heightTokens, shadowTokens, spacingTokens, widthTokens } from "../tokens";

interface ProviderProps {
  children: React.ReactNode;
  theme?: Theme;
  color?: "randmar" | "reseller" | "manufacturer";
}

export function Provider({ children, theme, color }: ProviderProps) {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={theme || defaultTheme}>
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
  );
}