import { Box, CssBaseline } from "@mui/material";
import ThemeProvider from "../theme/ThemeProvider";
import "./App.css";
import Layout from "./Layout";
import RouterProvider from "./Router/Provider";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box display="flex">
        <RouterProvider>
          <Layout />
        </RouterProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
