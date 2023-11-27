import { Card, CardContent, CardHeader } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { useComponents } from "../../App/hooks";
import ReactGA from "react-ga";

export default function ShowView(): ReactElement {
  const components = useComponents();

  useEffect(() => {
    ReactGA.pageview(window.location.href);
  }, []);

  return (
    <Card sx={{ py: 1, my: 1 }}>
      <CardHeader title="Detail" />
      <CardContent>{components} </CardContent>
    </Card>
  );
}
