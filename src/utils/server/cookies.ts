"use server";

import { cookies } from "next/headers";

export const getCookie = (key: string) => {
  return cookies().get(key);
};

export const getCookies = () => {
  return cookies().getAll();
};

export const setCookie = (key: string, value: string) => {
  cookies().set(key, value);
};
