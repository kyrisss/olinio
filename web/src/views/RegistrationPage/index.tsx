import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { RegistrationForm } from "models/auth";
import { Option } from "models/common";

import options from "@common/dropdown_Test.json";
import { Button, ButtonSizes, ButtonTypes, Variants } from "@components/Button";
import { REGEX_EMAIL, REGEX_PASSWORD } from "@constants/common";

export const RegistrationPage = () => {
  const [transformedOptions, setTransformedOptions] = useState<Option[]>([] as Option[]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationForm>({ mode: "all" });

  useEffect(() => {
    const mapOptions = options.map(({ name, code }) => ({ label: name, value: code }));
    setTransformedOptions(mapOptions);
  }, []);

  const onSubmit = (data: RegistrationForm) => {
    console.log(data);
  };

  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card__title">REGISTRATION</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName" className="group">
            <span className="group__label">
              First Name<span className="group__label_required">*</span>
            </span>
            <input {...(register("firstName"), { required: true })} id="firstName" placeholder="firstName" className="group__value" />
          </label>
          <label htmlFor="lastName" className="group">
            <span className="group__label">
              Last Name<span className="group__label_required">*</span>
            </span>
            <input {...(register("lastName"), { required: true })} id="lastName" placeholder="lastName" className="group__value" />
          </label>
          <label htmlFor="username" className="group">
            <span className="group__label">
              Username<span className="group__label_required">*</span>
            </span>
            <input {...(register("username"), { required: true })} id="username" placeholder="username" className="group__value" />
          </label>
          <label htmlFor="email" className="group">
            <span className="group__label">
              Email<span className="group__label_required">*</span>
            </span>
            <input
              {...register("email", { required: true, pattern: { value: REGEX_EMAIL, message: "wrong password format" } })}
              id="email"
              type="email"
              placeholder="email"
              className="group__value"
            />
          </label>
          <label htmlFor="password" className="group">
            <span className="group__label">
              Password<span className="group__label_required">*</span>
            </span>
            <input
              {...register("email", { required: true, pattern: { value: REGEX_PASSWORD, message: "wrong email format" } })}
              id="password"
              type="password"
              placeholder="password"
              className="group__value"
            />
          </label>
          <label htmlFor="phoneNumber" className="group">
            <span className="group__label">Phone Number</span>
            <input id="phoneNumber" type="text" placeholder="phoneNumber" className="group__value" />
          </label>
          <label htmlFor="country" className="group">
            <span className="group__label">Country</span>
            <Controller
              name={"country"}
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Select {...field} options={transformedOptions} className="group__value" />}
            />
          </label>
          <Button type={ButtonTypes.SUBMIT} variant={Variants.PRIMARY} size={ButtonSizes.MEDIUM} text="REGISTER USER" />
        </form>
      </div>
    </div>
  );
};
