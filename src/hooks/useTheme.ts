import { useContext } from "react";

import { ThemeContext, Themes } from "@components/ThemeSwitcher/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "@constants/localStorage";

export interface UseThemeResult {
  theme: Themes;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme, toggleTheme };
};
