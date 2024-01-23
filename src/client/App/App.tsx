import { Box, CssBaseline } from "@mui/material";
import { UserProvider as UserContextProvider } from "../context/UserProvider";
import ThemeProvider from "../theme/ThemeProvider";
import { ToastProvider } from "../validation";
import Layout from "./Layout";
import RouterProvider from "./Router/Provider";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const refreshToken = async () => {
    try {
      await axios.get("/refresh-token", {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(refreshToken, 1000 * 60 * 19);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ThemeProvider>
      <CssBaseline />
      <Box display="flex">
        <RouterProvider>
          <UserContextProvider>
            <ToastProvider>
              <Layout />
            </ToastProvider>
          </UserContextProvider>
        </RouterProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
