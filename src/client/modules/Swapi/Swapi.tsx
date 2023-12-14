import { Card, CardContent, CardHeader, List, ListItem } from "@mui/material";
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Character, PeopleDocument, PeopleOutput } from "../../../api/gql/graphql";
import { translate } from "../../../i18n/utils";
import { Resource } from "../../App/Router/utils";
import { useData, useUrlParams } from "../../App/hooks";
import { Fulltext } from "../../ui/Fulltext";
import { Link } from "../../ui/Link";
import { Pagination } from "../../ui/Pagination";
import { Spinner } from "../../ui/Spinner";
import { useToast } from "../../validation";
import { Severity } from "../../validation/ToastContext";
import Item from "./Item";

export default function Swapi(): ReactElement {
  const [params, setParams] = useUrlParams();

  const [searchName, setSearchName] = useState<string>(params.search);
  const [page, setPage] = useState<number>(params?.page ? Number(params?.page) : 1);

  useEffect(() => {
    setSearchName(params.search);
    setPage(params?.page ? Number(params.page) : 1);
  }, [params]);

  const { setOpenToast, setSeverity, setToastMessage } = useToast();

  const { data, fetching, error } = useData<PeopleOutput>({
    doc: PeopleDocument,
    variables: { searchName, page },
  });

  useEffect(() => {
    if (error) {
      setOpenToast(true);
      setSeverity(Severity.Error);
      setToastMessage(translate("server_error"));
    }
  }, [error, data]);

  const handlePagination = (e: ChangeEvent<unknown>, page: number) => {
    setParams(
      (!page || page === 1) && searchName
        ? { search: searchName }
        : page > 1 && searchName
        ? { page: page.toString(), search: searchName }
        : page > 1
        ? { page: page.toString() }
        : {}
    );
  };

  const handleFultextChange = (e: string) => {
    setParams(e ? { search: e } : {});
  };
  return (
    <Card>
      <CardHeader title={translate("Characters")} />
      <CardContent>
        <Fulltext
          sx={{ width: "100%", maxWidth: 400 }}
          value={searchName}
          onChange={handleFultextChange}
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
