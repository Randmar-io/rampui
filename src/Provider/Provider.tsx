import { Global, css } from "@emotion/react";
import React from "react";
import { borderTokens, heightTokens, shadowTokens, spacingTokens, widthTokens } from "../tokens";

interface ProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <>
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
    </>
  );
}