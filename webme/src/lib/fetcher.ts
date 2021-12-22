import urljoin from "url-join";
import { APIREQUEST_PROPS, SHRINK_REQUEST_PROPS } from "../typings/api";
import { QUERY_API } from "./config";

export const fetchLink = async (link: string) => {
  const data = await fetch(urljoin(QUERY_API, `?link=${link}`)).then((r) =>
    r.json()
  );

  return data as APIREQUEST_PROPS<SHRINK_REQUEST_PROPS>;
};
