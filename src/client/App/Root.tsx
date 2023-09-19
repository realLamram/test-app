import { Box } from "@mui/material";
import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";

export default function Root(): ReactElement {
  const data = useLoaderData();

  console.log("Root data ", data);

  return (
    <Box>
      <pre>{JSON.stringify(data)}</pre>
    </Box>
  );
}
