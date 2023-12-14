import qs from "qs";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export type Params = Record<string, string | string[] | undefined>;

const useUrlParams = (): [
  params: Record<string, string>,
  setParams: Dispatch<SetStateAction<Record<string, any>>>,
] => {
  const formatInitParams = qs.parse(new URLSearchParams(window.location.search).toString());
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState<Record<string, any>>(formatInitParams);

  useEffect(() => {
    const handlePopstate = (event: PopStateEvent) => {
      event.preventDefault();
      setParams(qs.parse(new URLSearchParams(window.location.search).toString()));
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  useEffect(() => {
    if (JSON.stringify(params) !== JSON.stringify(formatInitParams)) {
      setSearchParams(
        {
          ...qs.parse(searchParams.toString()),
          ...params,
        },
        { replace: searchParams.size > 0 }
      );
    }
  }, [params]);

  useEffect(() => {
    if (searchParams.size === 0) {
      setParams({});
    }
  }, [searchParams]);

  return [params, setParams];
};

export default useUrlParams;
