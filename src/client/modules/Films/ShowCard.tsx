import { ReactElement } from "react";
import { Film, FilmDocument } from "../../../api/gql/graphql";
import { useBreakPoints, useData } from "../../App/hooks";
import { Link, useNavigate, useParams } from "react-router-dom";
import StyledCard, { StyledCardBody, StyledCardHeader } from "./StyledCard";
import { StyledListItemTitle } from "./StyledItemsList";
import { translate } from "../../../i18n/utils";
import { StyledButton } from "./StyledButton";
import { Resource } from "../../App/Router/utils";
import { Spinner } from "../../ui/Spinner";
import { red } from "@mui/material/colors";

export default function ShowCard(): ReactElement {
  const { downSM } = useBreakPoints();
  const navigate = useNavigate();
  const { filmId } = useParams();
  const { data, fetching } = useData<Film>({
    doc: FilmDocument,
    variables: { id: filmId },
  });

  const film = data?.film;
  const { title, plot, year, poster, genre, director, writer, country, actors } = film || {};

  const Row = (item: { [key: string]: { [name: string]: string } }): ReactElement => {
    const [key, value] = Object.entries(item)[0];
    const val = Object.values(value)[0];
    return (
      <div style={{ marginBottom: 7 }}>
        <StyledListItemTitle>{translate(Object.keys(value)[0])}</StyledListItemTitle>
        {val && val !== "N/A" ? val : <span style={{ color: red[500] }}>{translate("N/A")}</span>}
      </div>
    );
  };

  return (
    <StyledCard $sx={{ maxWidth: 900, backgroundColor: "#FFFFF5" }}>
      <StyledCardHeader $sx={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{title}</h3>
        <StyledButton onClick={() => navigate(-1)}>{translate("back")}</StyledButton>
      </StyledCardHeader>
      <StyledCardBody $sx={{ display: downSM ? "block" : "flex" }}>
        {fetching ? (
          <div style={{ width: "100%" }}>
            <Spinner />
          </div>
        ) : (
          <>
            <div
              style={{
                minWidth: downSM ? "100%" : 300,
              }}
            >
              {poster && poster !== "N/A" ? (
                <img src={poster} alt={title} width="100%" height="auto" />
              ) : (
                <span style={{ color: red[500] }}>{translate("N/A_image")}</span>
              )}
            </div>
            <div style={{ padding: 10, marginLeft: downSM ? 0 : 10 }}>
              <Row item={{ director }} />
              <Row item={{ writer }} />
              <Row item={{ actors }} />
              <Row item={{ genre }} />
              <Row item={{ plot }} />
              <Row item={{ country }} />
              <Row item={{ year }} />
            </div>
          </>
        )}
      </StyledCardBody>
    </StyledCard>
  );
}
