import React, { FC } from "react";
import cn from "classnames";

import { useTheme } from "@hooks/useTheme";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  const onChange = () => {
    toggleTheme();
  };

  return (
    <label className={cn("themeSwithcer", className)}>
      <input className="themeSwithcer__input" type="checkbox" onChange={onChange} />
      <span className="themeSwithcer__span"></span>
    </label>
  );
};
