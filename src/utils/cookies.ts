import { Cookies } from "react-cookie";
import type { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";

export const cookies = new Cookies();

export const setCookies = (
  name: string,
  value: RawAxiosResponseHeaders | AxiosResponseHeaders,
  option?: object
) => cookies.set(name, value, { ...option });

export const getCookies = (name: string) => cookies.get(name);

export const removeCookies = (name: string) => cookies.remove(name);
