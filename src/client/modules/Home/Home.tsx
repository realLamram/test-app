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

        <Typography sx={{ ...style, p: 1 }}>
          You can turn on the <b> administrator role </b> in the user avatar in the top-right corner
          of this website.
        </Typography>

        <Typography sx={{ ...style, p: 1, my: 1 }}>
          You will then see the changes in the <b> Book module</b>.
        </Typography>

        <Typography sx={{ ...style, p: 1, my: 1 }}>
          There is a yellow button{" "}
          <IconBtn
            sx={{
              backgroundColor: yellow[300],
              ":hover": {
                backgroundColor: yellow[500],
              },
            }}
          >
            <VisibilityIcon />
          </IconBtn>{" "}
          in the Book module that you can use to <b>switch to customer view</b>.
        </Typography>

        <Typography sx={{ ...style, p: 1, my: 1 }}>
          This website emphasizes <b>types</b> (TypeScript), <b>responsiveness</b> and{" "}
          <b>reusability</b> of components.
        </Typography>
      </CardContent>
    </Card>
  );
}
