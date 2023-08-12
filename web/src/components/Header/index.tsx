import React from "react";

import { ThemeSwitcher } from "@components/ThemeSwitcher";

import { AccountMenu } from "./AccountMenu";

export const Header = () => (
  <header className="header">
    <ThemeSwitcher className="header__switcher" />
    <AccountMenu className="header__account" />
  </header>
);
