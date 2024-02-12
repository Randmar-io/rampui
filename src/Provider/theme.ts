import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    manufacturer: true;
    reseller: true;
  }
}
declare module "@mui/material/TableCell" {
  interface TableCellPropsVariantOverrides {
    item: true;
  }
}

interface Theme {
  color: "central" | "partner" | "reseller" | "manufacturer";
}

// export function getTheme({ color }: Theme) {

// }

const theme = createTheme({
  typography: {
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
  },
  shape: {
    borderRadius: 12
  }
});

const isMobile = theme.breakpoints.down('sm');

theme.components = {
  MuiLink: {
    styleOverrides: {
      root: {
        color: "#2F2D2F",
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        color: "#595959",
        marginBottom: theme.spacing(0.5),
        "&:hover": {
          backgroundColor: "#F5B7B1",
        },
        "&:selected": {
          backgroundColor: "#F5B7B1",
          color: "#fe2824",
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: "none",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        overflowX: "auto",
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        padding: theme.spacing(2),
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px'
      }
    }
  },
  MuiButtonBase: {
    styleOverrides: {
      root: {
        borderRadius: 1,
        textDecoration: "none",
      },
    },
  },
  MuiButtonGroup: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        borderRadius: 24,
        textTransform: "none",
        fontFamily: "DM Sans, Arial, sans-serif",
        fontWeight: 600,
        textAlign: "center",
      },
    },
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: "manufacturer" },
        style: {
          backgroundColor: "#4F307F",
          color: "white",
          "&:hover": {
            backgroundColor: "#705893",
          },
        },
      },
      {
        props: { variant: "reseller" },
        style: {
          backgroundColor: "#376AD3",
          color: "white",
          "&:hover": {
            backgroundColor: "#698fde",
          },
        },
      },
    ],
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        fontWeight: 600,
        color: "#2F2D2F",
        fontSize: "16px",
        backgroundColor: "white",
      },
    },
    defaultProps: {
      align: "center",
    },
    variants: [
      {
        props: { variant: "item" },
        style: {
          padding: theme.spacing(),
          height: "72px",
          paddingLeft: "25px",
        },
      },
    ],
  },
  MuiTablePagination: {
    defaultProps: {
      rowsPerPageOptions: [20, 50, 100, 500],
      SelectProps: { native: true },
      showFirstButton: true,
      showLastButton: true,
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        margin: "0px 8px 0px 8px",
      },
    },
  },
  MuiTabs: {
    defaultProps: {
      variant: isMobile ? "scrollable" : "fullWidth",
    },
    styleOverrides: {
      root: {
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',
      }
    }
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        marginBottom: theme.spacing(),
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        color: "#fe2824",
      },
    },
  },
};