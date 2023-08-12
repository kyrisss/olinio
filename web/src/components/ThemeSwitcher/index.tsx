import React, { FC } from "react";

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
    <div className={className}>
      <label className="themeSwitcher">
        <input className="themeSwitcher__input" type="checkbox" onChange={onChange} />
        <span className="themeSwitcher__span"></span>
      </label>
    </div>
  );
};
