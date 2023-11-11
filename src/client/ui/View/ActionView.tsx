import { Card, CardContent, CardHeader } from "@mui/material";
import { ReactElement } from "react";
import { translate } from "../../../i18n/utils";
import { useComponents, useLoaderData } from "../../App/hooks";
import { ComponentProvider } from "../../context";
import ValidationProvider from "../../validation/Provider";

export default function ActionView(): ReactElement {
  const components = useComponents();
  const { action } = useLoaderData();

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
