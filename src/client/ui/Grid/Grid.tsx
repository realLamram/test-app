import { Box, BoxProps } from "@mui/material";
import React, { ReactElement } from "react";

export type GridProps = BoxProps & {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  gap?: string | number;
};

export default function Grid(props: GridProps): ReactElement {
  const { xs, sm, md, lg, xl = 12, gap = 2, sx, ...other } = props;
  const gridColumns = (breakpoint?: number) => `repeat(${breakpoint}, minmax(0, 1fr))`;
  return (
    <Box
      display="grid"
      sx={{
        gap: gap,
        gridTemplateColumns: {
          xl: gridColumns(xl),
          lg: lg && gridColumns(lg),
          md: md && gridColumns(md),
          sm: sm && gridColumns(sm),
          xs: xs && gridColumns(xs),
        },
        ...sx,
      }}
      {...other}
    />
  );
}
