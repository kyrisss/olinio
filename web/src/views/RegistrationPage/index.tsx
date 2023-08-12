import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import cn from "classnames";
import { RegistrationForm } from "models/auth";
import { Option } from "models/common";

import options from "@common/dropdown_Test.json";
import { Button, ButtonSizes, ButtonTypes, Variants } from "@components/Button";
import { useToast } from "@hooks/useToast";
import { useRegistrationMutation } from "@redux/auth/auth.api";
import { ROUTES } from "@routes/config";
import { REGEX_EMAIL, REGEX_PASSWORD } from "@constants/common";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const { createErrorToast, createSuccessToast } = useToast();

  const [registerUser] = useRegistrationMutation();
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

  const onSubmit = async (data: RegistrationForm) => {
    try {
      await registerUser({ ...data, country: data.country?.value }).unwrap();
      createSuccessToast("Successful registration");
      navigate(ROUTES.LOGIN);
    } catch (e) {
      createErrorToast();
    }
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
            <input {...register("firstName", { required: true })} id="firstName" placeholder="firstName" className={cn("group__value", { input_invalid: errors.firstName })} />
          </label>
          <label htmlFor="lastName" className="group">
            <span className="group__label">
              Last Name<span className="group__label_required">*</span>
            </span>
            <input {...register("lastName", { required: true })} id="lastName" placeholder="lastName" className={cn("group__value", { input_invalid: errors.lastName })} />
          </label>
          <label htmlFor="username" className="group">
            <span className="group__label">
              Username<span className="group__label_required">*</span>
            </span>
            <input {...register("username", { required: true })} id="username" placeholder="username" className={cn("group__value", { input_invalid: errors.username })} />
          </label>
          <label htmlFor="email" className="group">
            <span className="group__label">
              Email<span className="group__label_required">*</span>
            </span>
            <input
              {...register("email", { required: true, pattern: { value: REGEX_EMAIL, message: "wrong email format" } })}
              id="email"
              type="email"
              placeholder="email"
              className={cn("group__value", { input_invalid: errors.email })}
            />
            {errors.email && <p className="group__label_required">{errors.email.message}</p>}
          </label>
          <label htmlFor="password" className="group">
            <span className="group__label">
              Password<span className="group__label_required">*</span>
            </span>
            <input
              {...register("password", { required: true, pattern: { value: REGEX_PASSWORD, message: "wrong password format" } })}
              id="password"
              type="password"
              placeholder="password"
              className={cn("group__value", { input_invalid: errors.password })}
            />
            {errors.password && <p className="group__label_required">{errors.password.message}</p>}
          </label>
          <label htmlFor="phone" className="group">
            <span className="group__label">Phone Number</span>
            <input {...register("phone")} id="phone" placeholder="phone number" className="group__value" />
          </label>
          <label htmlFor="country" className="group">
            <span className="group__label">Country</span>
            <Controller
              name={"country"}
              control={control}
              render={({ field }) => <Select {...field} options={transformedOptions} classNamePrefix="react-select" className="group__value" />}
            />
          </label>
          <Button type={ButtonTypes.SUBMIT} variant={Variants.PRIMARY} size={ButtonSizes.MEDIUM} text="REGISTER USER" />
        </form>
      </div>
    </div>
  );
};
