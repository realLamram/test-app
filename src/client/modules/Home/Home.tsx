import VisibilityIcon from "@mui/icons-material/Visibility";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { ReactElement } from "react";
import { IconBtn } from "../../ui/Button";

export default function Home(): ReactElement {
  const style = { backgroundColor: yellow[50], width: "fit-content" };
  return (
    <Card
      sx={{
        minHeight: 600,
        p: 2,
        backgroundImage: "url('space3.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <CardHeader title={"Welcome to my small web portfolio."} sx={style} />
      <CardContent sx={{ p: 2 }}>
        <a target="_blank" href="https://github.com/realLamram/test-app">
          <Typography sx={{ ...style, p: 1, my: 1 }}>Here you can check my repository.</Typography>
        </a>

        <Typography sx={{ ...style, p: 1, my: 1 }}>
          You can check the assigned task in the <b>Films</b> module.
        </Typography>

        <Typography sx={{ ...style, p: 1 }}>
          You can turn on the <b> administrator role </b> in the user avatar in the top-right corner
          of this website.
        </Typography>

        <Typography sx={{ ...style, p: 1, my: 1 }}>
          You will then see the changes in the <b> Book module</b>.
        </Typography>

        <Typography sx={{ ...style, p: 1, my: 1 }}>
          This website emphasizes <b>types</b> (TypeScript), <b>responsiveness</b> and{" "}
          <b>reusability</b> of components.
        </Typography>
        <Typography sx={{ ...style, p: 1, my: 1 }}>
          The <b>technologies</b> used to develop these pages are: React, TypeScript, GraphQL, URQL,
          Prisma, Pothos, Node.js, Express...
        </Typography>
      </CardContent>
    </Card>
  );
}
