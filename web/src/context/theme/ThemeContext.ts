import { createContext } from "react";

export enum Themes {
  DARK = "dark",
  LIGHT = "light",
}

export interface ThemeContextProps {
  setTheme: (theme: Themes) => void;
  theme: Themes;
}

export const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);
