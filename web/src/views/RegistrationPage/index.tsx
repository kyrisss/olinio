import React from "react";

import { Button, ButtonSizes, ButtonTypes, Variants } from "@components/Button";

export const RegistrationPage = () => {
  console.log();
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card__title">REGISTRATION</h2>
        <form>
          <label htmlFor="firstName" className="group">
            <span className="group__label">
              First Name<span className="group__label_required">*</span>
            </span>
            <input id="firstName" type="text" placeholder="firstName" />
          </label>
          <label htmlFor="lastName" className="group">
            <span className="group__label">
              Last Name<span className="group__label_required">*</span>
            </span>
            <input id="lastName" type="text" placeholder="lastName" />
          </label>
          <label htmlFor="username" className="group">
            <span className="group__label">
              Username<span className="group__label_required">*</span>
            </span>
            <input id="username" type="text" placeholder="username" />
          </label>
          <label htmlFor="email" className="group">
            <span className="group__label">
              Email<span className="group__label_required">*</span>
            </span>
            <input id="email" type="email" placeholder="email" />
          </label>
          <label htmlFor="password" className="group">
            <span className="group__label">
              Password<span className="group__label_required">*</span>
            </span>
            <input id="password" type="password" placeholder="password" />
          </label>
          <label htmlFor="phoneNumber" className="group">
            <span className="group__label">Phone Number</span>
            <input id="phoneNumber" type="text" placeholder="phoneNumber" />
          </label>
          <label htmlFor="country" className="group">
            <span className="group__label">Country</span>
            <input id="country" type="text" placeholder="country" />
          </label>
          <Button type={ButtonTypes.SUBMIT} variant={Variants.PRIMARY} size={ButtonSizes.MEDIUM} text="REGISTER USER" />
        </form>
      </div>
    </div>
  );
};
