import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { theme } from "./theme";

export default function ThemeProvider(props: any) {
  const { children } = props;
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
