import { createTheme, ThemeOptions } from "@mui/material";

const colors = {
  yellowCreme: "#FFFDD0",
  yellowVeryLight: "#FFFFF5",
};

const yellowTheme: ThemeOptions = {
  palette: {
    mode: "light",
    common: {
      black: "#111936",
      white: "#fff",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 910,
      lg: 1200,
      xl: 1536,
    },
    unit: "px",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.yellowCreme,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: "4px",
        },
      },
    },
  },
};

export const theme = createTheme(yellowTheme);
