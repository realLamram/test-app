import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from "@mui/material";
import React, { ReactElement } from "react";
import { useBreakPoints } from "../../App/hooks";

export type PaginationProps = MuiPaginationProps & {
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  fetching?: boolean;
};

export default function Pagination(props: PaginationProps): ReactElement | null {
  const { count, page, onChange, fetching, ...other } = props;
  const { downLG } = useBreakPoints();
  if (!fetching && count > 10) {
    return (
      <MuiPagination
        count={count ? Math.ceil(count / 10) : 0}
        size={"small"}
        page={page}
        onChange={onChange}
        variant="outlined"
        shape="rounded"
        color="primary"
        showFirstButton
        showLastButton
        siblingCount={downLG ? 0 : 2}
        {...other}
      />
    );
  } else {
    return null;
  }
}
