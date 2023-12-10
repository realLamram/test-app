import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { translate } from "../../../i18n/utils";

const Item = ({
  text,
  title,
  titleAlign = "left",
}: {
  text: string;
  title: string;
  titleAlign?: string;
}) => {
  return (
    <Stack padding={0.5}>
      <Typography fontSize={12} color={grey[700]} sx={{ textAlign: titleAlign }}>
        {title}
      </Typography>
      <Typography>
        {text === "unknown" ? translate("unknown") : text === "n/a" ? translate("not") : text}
      </Typography>
    </Stack>
  );
};

export default Item;
