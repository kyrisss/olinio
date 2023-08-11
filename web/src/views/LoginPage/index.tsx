import React from "react";
import { Link } from "react-router-dom";

import { Button, ButtonSizes, ButtonTypes, Variants } from "@components/Button";
import { ROUTES } from "@routes/config";

export const LoginPage = () => {
  console.log();
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card__title">LOGIN</h2>
        <form>
          <label htmlFor="username" className="group">
            <span className="group__label">username</span>
            <input id="username" type="text" placeholder="username" />
          </label>
          <label htmlFor="password" className="group">
            <span className="group__label">password</span>
            <input id="password" type="password" placeholder="password" />
          </label>
          <Button type={ButtonTypes.SUBMIT} variant={Variants.PRIMARY} size={ButtonSizes.MEDIUM} text="SIGN IN" />
        </form>
        <Link to={ROUTES.REGISTRATION}>Register</Link>
      </div>
    </div>
  );
};
