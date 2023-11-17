import { Card, CardContent, CardHeader } from "@mui/material";
import { ReactElement, useEffect } from "react";
import { translate } from "../../../i18n/utils";
import { useComponents, useLoaderData } from "../../App/hooks";
import { ComponentProvider } from "../../context";
import ValidationProvider from "../../validation/Provider";
import ReactGA from "react-ga";

export default function ActionView(): ReactElement {
  const components = useComponents();
  const { action } = useLoaderData();

  useEffect(() => {
    ReactGA.pageview(window.location.href);
  }, []);

  return (
    <ComponentProvider>
      <ValidationProvider>
        <Card sx={{ my: 1 }}>
          <CardHeader title={action === "new" ? translate("create") : translate("edit")} />
          <CardContent>{components}</CardContent>
        </Card>
      </ValidationProvider>
    </ComponentProvider>
  );
}
