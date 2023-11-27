import { Box, CssBaseline } from "@mui/material";
import ThemeProvider from "../theme/ThemeProvider";
import Layout from "./Layout";
import RouterProvider from "./Router/Provider";
import UserProvider from "../context/UserProvider";
import { ToastProvider } from "../validation";

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Box display="flex">
        <RouterProvider>
          <UserProvider>
            <ToastProvider>
              <Layout />
            </ToastProvider>
          </UserProvider>
        </RouterProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
