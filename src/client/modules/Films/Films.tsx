import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Film } from "../../../api";
import { FilmsOutput, FilmsOutputDocument } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { Resource } from "../../App/Router/utils";
import { useData } from "../../App/hooks";
import { YearPicker } from "../../ui/DatePicker";
import { Pagination } from "../../ui/Pagination";
import StyledCard, { StyledCardBody, StyledCardHeader, StyledTitle } from "./StyledCard";
import StyledInput from "./StyledInput";
import StyledLink from "./StyledLink";
import StyledList, { StyledListItem, StyledListItemTitle } from "./StyledItemsList";
import { Spinner } from "../../ui/Spinner";
import { useToast } from "../../validation";
import { Severity } from "../../validation/ToastContext";
import { set } from "react-ga";

export default function Films(): ReactElement {
  const [searchName, setSearchName] = useState<string>("");
  const [searchYear, setSearchYear] = useState<number | null>(null);
  const [page, setPage] = useState<number>(1);
  const [params, setParams] = useSearchParams();

  const { data, fetching, error } = useData<FilmsOutput>({
    doc: FilmsOutputDocument,
    variables: { searchName, searchYear, page },
  });

  const { setOpenToast, setSeverity, setToastMessage } = useToast();

  useEffect(() => {
    if (error) {
      setOpenToast(true);
      setSeverity(Severity.Error);
      setToastMessage(translate("server_error"));
    }
  }, [error, data]);

  useEffect(() => {
    setParams((prevParams) => ({
      ...prevParams,
      ...(searchName ? { s: searchName } : {}),
      ...(searchYear ? { y: `${searchYear}` } : {}),
      ...(page && page !== 1 ? { page: `${page}` } : {}),
    }));
  }, [searchName, searchYear, page]);

  useEffect(() => {
    setSearchName(params.get("s") || "");
    setSearchYear(params.get("y") ? Number(params.get("y")) : null);
    setPage(params.get("page") ? Number(params.get("page")) : 1);
  }, []);

  const handlePagination = (e: ChangeEvent<any>, page: number) => {
    setPage(page);
  };

  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledTitle children={translate("films")} />
        <div
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <StyledInput
            onChange={(e) => setSearchName(e.target.value)}
            placeholder={translate("search")}
          />
          <YearPicker
            slotProps={{ textField: { size: "small", placeholder: translate("year") } }}
            value={searchYear}
            onChange={(e) => setSearchYear(e)}
            handleDelete={() => setSearchYear(null)}
          />
        </div>
      </StyledCardHeader>
      <StyledCardBody>
        {fetching ? (
          <div style={{ width: "100%" }}>
            <Spinner />
          </div>
        ) : (
          <StyledList $sx={{ maxWidth: 650 }}>
            {data?.filmsOutput?.Search?.length ? (
              data.filmsOutput.Search.map((film: Film, idx: number) => (
                <StyledListItem key={idx}>
                  <div style={{ marginRight: 20, width: "100%", maxWidth: 500 }}>
                    <StyledListItemTitle>{`${translate("title")}`}</StyledListItemTitle>
                    <StyledLink
                      to={`/${Resource.FILMS}/${film.imdbID}`}
                      children={` ${film.title}`}
                    />
                  </div>
                  <div>
                    <StyledListItemTitle>{`${translate("year")}`}</StyledListItemTitle>
                    {`${film.year}`}
                  </div>
                </StyledListItem>
              ))
            ) : (
              <div>
                {data?.filmsOutput?.error === "Too many results." ? (
                  <>
                    {translate("too_many_results")}
                    <br />
                    {translate("keep_searching")}
                  </>
                ) : data?.filmsOutput?.error === "Movie not found!" ? (
                  translate("movies_not_found")
                ) : (
                  translate("start_searching")
                )}
              </div>
            )}
          </StyledList>
        )}
      </StyledCardBody>
      <div style={{ width: "100%", display: "flex", justifyContent: "center", maxWidth: 650 }}>
        <Pagination
          sx={{ mt: 2 }}
          count={data?.filmsOutput?.totalResults}
          page={page}
          onChange={handlePagination}
          fetching={fetching}
        />
      </div>
    </StyledCard>
  );
}
