// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0033A0", // みずほ信託ブルー
    },
    secondary: {
      main: "#666666",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Noto Sans JP", "Roboto", sans-serif',
    h6: {
      fontWeight: 700,
    },
  },
});
