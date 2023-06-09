"use server";

import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

export const getCookie = (key: string) => {
  return cookies().get(key)?.value;
};

export const getCookies = () => {
  return cookies().getAll();
};

export const setCookie = (
  key: string,
  value: string,
  options?: Partial<ResponseCookie>,
) => {
  cookies().set(key, value, options);
};
