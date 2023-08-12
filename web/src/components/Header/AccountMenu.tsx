import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { getAuthReducer, logout } from "@redux/auth/auth.slice";
import { ROUTES } from "@routes/config";

interface AccountMenuProps {
  className?: string;
}

export const AccountMenu: FC<AccountMenuProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector(getAuthReducer);

  const logoutHandler = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  };

  return <div className={className}>{isLoggedIn ? <div onClick={logoutHandler}>logout</div> : <Link to={ROUTES.LOGIN}>login</Link>}</div>;
};
