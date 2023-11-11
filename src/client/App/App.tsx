import { Box, CssBaseline } from "@mui/material";
import ThemeProvider from "../theme/ThemeProvider";
import Layout from "./Layout";
import RouterProvider from "./Router/Provider";
import UserProvider from "../context/UserProvider";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box display="flex">
        <RouterProvider>
          <UserProvider>
            <Layout />
          </UserProvider>
        </RouterProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
