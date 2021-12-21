import urljoin from "url-join";

export const INTERNAL_API = String(import.meta.env.VITE_INTERNAL_API) ?? "";
if (!INTERNAL_API) {
  throw new Error("VITE_INTERNAL_API not set.");
}

export const SHRINK_URL = urljoin(INTERNAL_API, "/minify");

export const APPURL = String(import.meta.env.VITE_APPURL) ?? "";
if (!APPURL) {
  throw new Error("VITE_APPURL not set.");
}
