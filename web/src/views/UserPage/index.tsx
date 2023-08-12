import React from "react";
import { Link, useParams } from "react-router-dom";

import { useGetUserByIdQuery } from "@redux/users/users.api";
import { ROUTES } from "@routes/config";
import { DEFAULT_USER } from "@constants/user";
import { PageModes } from "@models/common";

import { UserEdit } from "./UserEdit";
import { UserView } from "./UserView";

export const UserPage = () => {
  const { id = "", mode } = useParams();
  const { data: user = DEFAULT_USER } = useGetUserByIdQuery(id);

  const isEditMode = mode === PageModes.EDIT;

  return (
    <section className="section">
      {/* TODO: add Icon arrow left */}
      <Link className="breadcrumbsLink" to={ROUTES.USER_LIST}>
        to users list
      </Link>
      {isEditMode ? <UserEdit user={user} /> : <UserView user={user} />}
    </section>
  );
};
