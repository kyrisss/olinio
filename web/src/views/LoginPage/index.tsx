import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import cn from "classnames";
import { LoginForm } from "models/auth";

import { Button, ButtonSizes, ButtonTypes, Variants } from "@components/Button";
import { useAppDispatch } from "@hooks/redux";
import { useToast } from "@hooks/useToast";
import { useLoginMutation } from "@redux/auth/auth.api";
import { loginSuccess } from "@redux/auth/auth.slice";
import { ROUTES } from "@routes/config";

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { createErrorToast, createSuccessToast } = useToast();
  const [loginUser] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "all" });

  const onSubmit = async (data: LoginForm) => {
    try {
      const user = await loginUser(data).unwrap();
      if (user) {
        dispatch(loginSuccess(user));
        createSuccessToast("Successful authorization");
        navigate(ROUTES.ROOT);
      }
    } catch (e) {
      createErrorToast();
    }
  };
  return (
    <div className="card-container">
      <div className="card">
        <h2 className="card__title">LOGIN</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username" className="group">
            <span className="group__label">username</span>
            <input {...register("username", { required: true })} id="username" type="text" placeholder="username" className={cn({ input_invalid: errors.username })} />
          </label>
          <label htmlFor="password" className="group">
            <span className="group__label">password</span>
            <input {...register("password", { required: true })} id="password" type="password" placeholder="password" className={cn({ input_invalid: errors.password })} />
          </label>
          <Button type={ButtonTypes.SUBMIT} variant={Variants.PRIMARY} size={ButtonSizes.MEDIUM} text="SIGN IN" />
        </form>
        <Link className="link" to={ROUTES.REGISTRATION}>
          Registration
        </Link>
      </div>
    </div>
  );
};
