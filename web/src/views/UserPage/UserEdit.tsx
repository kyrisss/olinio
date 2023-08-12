import React, { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { generatePath, useNavigate } from "react-router-dom";
import Select from "react-select";
import cn from "classnames";
import { UpdateUserForm, User } from "models/auth";

import options from "@common/dropdown_Test.json";
import { Button, ButtonSizes, ButtonTypes, Variants } from "@components/Button";
import { useToast } from "@hooks/useToast";
import { useUpdateUserMutation } from "@redux/users/users.api";
import { ROUTES } from "@routes/config";
import { REGEX_EMAIL } from "@constants/common";
import { Option, PageModes } from "@models/common";

interface UserEditProps {
  user: User;
}

export const UserEdit: FC<UserEditProps> = ({ user }) => {
  const navigate = useNavigate();
  const { createErrorToast, createSuccessToast } = useToast();
  const [updateUser] = useUpdateUserMutation();
  const [transformedOptions, setTransformedOptions] = useState<Option[]>([] as Option[]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UpdateUserForm>({ mode: "all", defaultValues: { ...user, country: { label: user.country, value: user.country } } });

  useEffect(() => {
    const mapOptions = options.map(({ name, code }) => ({ label: name, value: code }));
    setTransformedOptions(mapOptions);
  }, []);

  const onSubmit = async (data: UpdateUserForm) => {
    try {
      const body = { ...data, country: data.country.value };
      await updateUser({ id: user._id, body }).unwrap();
      createSuccessToast("User information changed");
      const route = generatePath(ROUTES.USER, { id: user._id, mode: PageModes.VIEW });
      navigate(route);
    } catch (e) {
      createErrorToast();
    }
  };

  return (
    <section className="section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName" className="group group_row">
          <span className="group__label group__label_centered">
            First Name<span className="group__label_required">*</span>:
          </span>
          <input {...register("firstName", { required: true })} id="firstName" placeholder="firstName" className={cn("group__value", { input_invalid: errors.firstName })} />
        </label>
        <label htmlFor="lastName" className="group group_row">
          <span className="group__label group__label_centered">
            Last Name<span className="group__label_required">*</span>:
          </span>
          <input {...register("lastName", { required: true })} id="lastName" placeholder="lastName" className={cn("group__value", { input_invalid: errors.lastName })} />
        </label>
        <label htmlFor="email" className="group group_row">
          <span className="group__label group__label_centered">
            Email<span className="group__label_required">*</span>:
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
        <label htmlFor="phone" className="group group_row">
          <span className="group__label group__label_centered">Phone Number:</span>
          <input {...register("phone")} id="phone" placeholder="phone number" className="group__value" />
        </label>
        <label htmlFor="country" className="group group_row">
          <span className="group__label group__label_centered">Country:</span>
          <Controller
            name={"country"}
            control={control}
            render={({ field }) => <Select {...field} options={transformedOptions} classNamePrefix="react-select" className="group__value" />}
          />
        </label>
        <div className="buttons-container">
          <Button type={ButtonTypes.SUBMIT} variant={Variants.PRIMARY} size={ButtonSizes.MEDIUM} text="SAVE USER" />
        </div>
      </form>
    </section>
  );
};
