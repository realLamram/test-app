import {
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  List as MuiList,
  ListProps as MuiListProps,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactElement, ReactNode } from "react";
import { DataProvider } from "../../context";
import Avatar from "../Avatar/Avatar";
import { FormatStack, FormatString } from "../Format";
import { Link } from "../Link";
import { useBreakPoints } from "../../App/hooks";

type ListProps = MuiListProps<"ul"> & {
  data: Record<string, any>;
  primary?: string[] | ReactElement;
  secondary?: string[] | ReactElement;
  listItemAction?: ReactElement;
};

export default function List(props: ListProps): ReactElement {
  const { primary, secondary, data, listItemAction = <></>, ...other } = props;
  const { downMD } = useBreakPoints();
  return (
    <MuiList dense {...other}>
      {data
        ? data.map((item: Record<string, any>, idx: number) => {
            return (
              <DataProvider key={idx} data={item}>
                <ListItem key={idx}>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <Stack sx={{ width: "100%" }} direction={downMD ? "column" : "row"}>
                    <ListItemText
                      disableTypography
                      primary={
                        <>
                          {primary && Array.isArray(primary) ? (
                            <Link style={{ padding: 0 }} url={item.id}>
                              <Typography
                                component="span"
                                sx={{
                                  borderRadius: "5px",
                                  ":hover": {
                                    backgroundColor: grey[100],
                                    width: "fit-content",
                                  },
                                }}
                              >
                                <FormatString fields={primary} />
                              </Typography>
                            </Link>
                          ) : (
                            <Box>{primary && { ...primary }}</Box>
                          )}
                        </>
                      }
                      secondary={
                        <>
                          {secondary && Array.isArray(secondary) ? (
                            <Typography variant="body2" color={grey[600]}>
                              <FormatStack fields={secondary} />
                            </Typography>
                          ) : (
                            <Box>{secondary && { ...secondary }}</Box>
                          )}
                        </>
                      }
                    />
                    {listItemAction}
                  </Stack>
                </ListItem>
                <Divider />
              </DataProvider>
            );
          })
        : null}
    </MuiList>
  );
}
