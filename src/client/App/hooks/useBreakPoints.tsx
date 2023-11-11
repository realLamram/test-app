import { useMediaQuery, useTheme } from "@mui/material";
type BreakPoints = {
  down450: boolean;
  downSM: boolean;
  downMD: boolean;
  downLG: boolean;
  downXL: boolean;
  upLG: boolean;
};

export default function useBreakPoints(): BreakPoints {
  const theme = useTheme();
  const down450 = useMediaQuery("(max-width: 450px)");
  const downSM = useMediaQuery(theme.breakpoints.down("sm"));
  const downMD = useMediaQuery(theme.breakpoints.down("md"));
  const downLG = useMediaQuery(theme.breakpoints.down("lg"));
  const upLG = useMediaQuery(theme.breakpoints.up("lg"));
  const downXL = useMediaQuery(theme.breakpoints.down("xl"));

  return { down450, downSM, downMD, downLG, downXL, upLG };
}
