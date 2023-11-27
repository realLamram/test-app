import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Card, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactElement, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "urql";
import { Employee } from "../../../api";
import { DestroyEmployeeDocument, EmployeeDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { RouterAction } from "../../App/Router/utils";
import { useLoaderData, useMutation } from "../../App/hooks";
import { Avatar } from "../../ui/Avatar";
import { ResponsiveButton } from "../../ui/Button";
import { ConfirmDialog } from "../../ui/Dialog";
import { Link } from "../../ui/Link";
import { localeDate } from "../../ui/utils";

export default function ShowCard(): ReactElement {
  const { resource } = useLoaderData();
  const params = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const [{ data, fetching }] = useQuery<{ employee: Employee }>({
    query: EmployeeDocument,
    variables: {
      id: params.employeeId,
    },
  });

  const { execDelete: destroyEmployee } = useMutation(DestroyEmployeeDocument);

  const handleSubmit = () => {
    destroyEmployee({ id: params.employeeId });
    navigate(`/${resource}`);
  };

  return (
    <>
      {!fetching ? (
        <Card>
          <ConfirmDialog
            title={
              <Typography>{`Smazat ${data?.employee.name} ${data?.employee.surName}?`}</Typography>
            }
            open={open}
            onSubmit={handleSubmit}
            onClose={() => setOpen(false)}
          />
          <CardHeader
            avatar={<Avatar name={data?.employee.name} surName={data?.employee.surName} />}
            title={
              <Typography variant="h6">{`${data?.employee.name} ${data?.employee.surName}`}</Typography>
            }
            action={
              <Stack direction="row" spacing={1}>
                <ResponsiveButton
                  onClick={() => setOpen(true)}
                  variant="outlined"
                  icon={<DeleteIcon />}
                >
                  {translate("delete")}
                </ResponsiveButton>
                <Link url={RouterAction.EDIT}>
                  <ResponsiveButton variant="outlined" icon={<EditIcon />}>
                    {translate("edit")}
                  </ResponsiveButton>
                </Link>
              </Stack>
            }
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4} lg={3} xl={2}>
                <Typography variant="subtitle2" fontSize={12} color={grey[600]}>
                  {translate("skill")}
                </Typography>
                <Typography variant="body1" fontWeight={500} fontSize={14}>
                  {data?.employee.skill || "Neuvedeno"}
                </Typography>
              </Grid>
              <Grid item xs={6} md={4} lg={3} xl={2}>
                <Typography variant="subtitle2" fontSize={12} color={grey[600]}>
                  {translate("birth")}
                </Typography>
                <Typography variant="body1" fontWeight={500} fontSize={14}>
                  {data?.employee.birth ? localeDate(data?.employee.birth) : "Neuvedeno"}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
}
