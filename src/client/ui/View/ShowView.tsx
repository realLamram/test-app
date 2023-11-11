import { Card, CardContent, CardHeader } from "@mui/material";
import { ReactElement } from "react";
import { useComponents } from "../../App/hooks";

export default function ShowView(): ReactElement {
  const components = useComponents();

  return (
    <Card sx={{ py: 1 }}>
      <CardHeader title="Detail" />
      <CardContent>{components} </CardContent>
    </Card>
  );
}
