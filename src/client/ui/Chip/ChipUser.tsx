import { Chip, ChipProps } from "@mui/material";
import { Avatar } from "../Avatar";

export default function ChipUser(
  props: ChipProps & { name?: string | null; surName?: string | null }
) {
  const { name = "", surName = "", ...other } = props;
  return (
    <Chip
      avatar={<Avatar {...{ name, surName }} />}
      label={`${name} ${surName}`}
      variant="outlined"
      {...other}
    />
  );
}
