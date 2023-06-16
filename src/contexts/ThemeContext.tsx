"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

import { setCookie } from "@/utils/server/cookies";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export const ThemeContextProvider = ({
  theme,
  children,
}: {
  children: ReactNode;
  theme?: string;
}) => {
  const [currentTheme, setCurrentTheme] = useState(theme || "light");

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    setCookie("theme", currentTheme, {
      maxAge: new Date("2038-01-01T01:01:01.345").getTime(),
    });
  }, [currentTheme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
