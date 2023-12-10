import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
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
import Item from "./Item";
import { useToast } from "../../validation";
import { Severity } from "../../validation/ToastContext";
import { set } from "react-ga";

export default function Swapi(): ReactElement {
  const [page, setPage] = useState<number>(1);
  const [params, setParams] = useSearchParams();
  const [searchName, setSearchName] = useState<string>(params.get("search") ?? "");
  const [prevSearchName, setPrevSearchName] = useState<string>(params.get("search") ?? "");
  const { setOpenToast, setSeverity, setToastMessage } = useToast();

  const { data, fetching, error } = useData<PeopleOutput>({
    doc: PeopleDocument,
    variables: { searchName, page },
  });

  useEffect(() => {
    if (!params.get("search") && !params.get("page")) {
      setPage(1);
      setSearchName("");
    }
  }, [params]);

  useEffect(() => {
    setParams((prevParams) => ({
      ...prevParams,
      ...(page && page !== 1 && prevSearchName === searchName ? { page: `${page}` } : {}),
      ...(searchName ? { search: searchName } : {}),
    }));

    if (prevSearchName !== searchName) {
      setPage(1);
    }
    setPrevSearchName(searchName);
  }, [page, searchName]);

  useEffect(() => {
    setSearchName(params.get("search") || "");
    setPage(params.get("page") ? Number(params.get("page")) : 1);
  }, []);

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

  console.log(data);

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
