import { Card, CardContent, CardHeader, List, ListItem } from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Character, PeopleDocument, PeopleOutput } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { Resource } from "../../App/Router/utils";
import { useData } from "../../App/hooks";
import { Fulltext } from "../../ui/Fulltext";
import { Link } from "../../ui/Link";
import { Pagination } from "../../ui/Pagination";
import { Spinner } from "../../ui/Spinner";
import { useToast } from "../../validation";
import { Severity } from "../../validation/ToastContext";
import Item from "./Item";

export default function Swapi(): ReactElement {
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState<number>(params.get("page") ? Number(params.get("page")) : 1);
  const [prevPage, setPrevPage] = useState<number>(
    params.get("page") ? Number(params.get("page")) : 1
  );
  const [searchName, setSearchName] = useState<string>(params.get("search") ?? "");
  const [prevSearchName, setPrevSearchName] = useState<string>(params.get("search") ?? "");
  const { setOpenToast, setSeverity, setToastMessage } = useToast();

  const { data, fetching, error } = useData<PeopleOutput>({
    doc: PeopleDocument,
    variables: { searchName, page },
  });

  useEffect(() => {
    const searchPar = params.get("search");
    const pagePar = params.get("page");
    if (searchPar && searchPar !== searchName) {
      setSearchName(searchPar);
    } else if (!searchPar && searchName !== "") {
      setSearchName("");
    }

    if (pagePar && pagePar !== `${page}`) {
      setPage(Number(pagePar));
    } else if (!pagePar && page !== 1) {
      setPage(1);
    }
  }, [params]);

  useEffect(() => {
    const searchPar = params.get("search");
    const pagePar = params.get("page");
    if (searchName !== prevSearchName && searchName !== searchPar) {
      setParams((prevParams) => ({
        ...prevParams,
        ...(searchName ? { search: searchName } : {}),
      }));
    }
    if (prevSearchName !== searchName) {
      setPage(1);
    }
    if (page !== prevPage && page !== Number(pagePar)) {
      setParams((prevParams) => {
        return {
          ...prevParams,
          ...(page && page !== 1 ? { page: `${page}` } : {}),
          ...(searchName ? { search: searchName } : {}),
        };
      });
    }
    setPrevSearchName(searchName);
    setPrevPage(page);
  }, [page, searchName]);

  useEffect(() => {
    if (error) {
      setOpenToast(true);
      setSeverity(Severity.Error);
      setToastMessage(translate("server_error"));
    }
  }, [error, data]);

  const handlePagination = (e: ChangeEvent<any>, page: number) => {
    setPage(page);
  };

  return (
    <Card>
      <CardHeader title={translate("Characters")} />
      <CardContent>
        <Fulltext
          sx={{ width: "100%", maxWidth: 400 }}
          value={searchName}
          onChange={setSearchName}
        />
        <List dense sx={{ maxWidth: 400 }}>
          {fetching ? (
            <Spinner />
          ) : (
            data?.people?.results?.map((character: Character, idx: number) => (
              <ListItem key={idx} divider sx={{ p: 0, justifyContent: "space-between" }}>
                <Link url={`/${Resource.SWAPI}/${character.id}`}>
                  <Item title={translate("name")} text={character.name ?? ""} />
                </Link>
                <Item
                  title={translate("birth")}
                  text={
                    !character.birth_year || character.birth_year === "unknown"
                      ? translate("unknown")
                      : character.birth_year
                  }
                  titleAlign="right"
                />
              </ListItem>
            ))
          )}
        </List>
        <Pagination
          fetching={fetching}
          count={data?.people?.count}
          page={page}
          onChange={handlePagination}
        />
      </CardContent>
    </Card>
  );
}
