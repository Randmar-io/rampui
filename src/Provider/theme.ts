import { Theme } from "@mui/system";
import blue from "../colors/blue";
import purple from "../colors/purple";
import red from "../colors/red";

export type Color = "randmar" | "reseller" | "manufacturer";

export const themeColors = {
  randmar: red,
  reseller: blue,
  manufacturer: purple,
}

export const typography = {
  fontFamily: "DM Sans, Arial, sans-serif",
  h1: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 18,

  },
  h3: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  h4: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  h5: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  h6: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  subtitle1: {
    fontSize: 13,
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: 13,
    color: '#6c6c6c'
  },
  body2: {
    lineHeight: '1.25rem',
    color: '#505050'
  }
};

export const shape = {
  borderRadius: 12
}

export const components = (theme: Theme) => ({
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        marginBottom: theme.spacing(),
      },
    },
  },
  // add more components here as needed
});