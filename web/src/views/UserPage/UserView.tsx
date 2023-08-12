import React, { FC } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import { User } from "models/auth";

import { Button, ButtonSizes, Variants } from "@components/Button";
import { useToast } from "@hooks/useToast";
import { useDeleteUserMutation } from "@redux/users/users.api";
import { ROUTES } from "@routes/config";
import { PageModes } from "@models/common";

interface UserViewProps {
  user: User;
}

export const UserView: FC<UserViewProps> = ({ user }) => {
  const { country, email, firstName, lastName, phone, username, _id } = user;

  const navigate = useNavigate();
  const { createErrorToast, createSuccessToast } = useToast();

  const [deleteUser] = useDeleteUserMutation();

  const deleteHandler = async () => {
    try {
      await deleteUser(_id).unwrap();
      createSuccessToast("User deleted successfully");
      navigate(ROUTES.USER_LIST);
    } catch (e) {
      createErrorToast();
    }
  };

  const editHandler = () => {
    const route = generatePath(ROUTES.USER, { id: _id, mode: PageModes.EDIT });
    navigate(route);
  };

  const mapUser = [
    {
      key: "First Name:",
      value: firstName,
    },
    {
      key: "Last Name:",
      value: lastName,
    },
    {
      key: "Username:",
      value: username,
    },
    {
      key: "Email:",
      value: email,
    },
    {
      key: "Phone Number:",
      value: phone,
    },
    {
      key: "Country:",
      value: country,
    },
  ];

  return (
    <section className="section">
      {mapUser.map(({ key, value }) => (
        <div key={key} className="group group_row">
          <div className="group__label">{key}</div>
          <div className="group__value">{value}</div>
        </div>
      ))}
      <div className="buttons-container">
        <Button variant={Variants.PRIMARY} size={ButtonSizes.MEDIUM} text="EDIT USER" onClick={editHandler} />
        <Button variant={Variants.TETRIARY} size={ButtonSizes.MEDIUM} text="DELETE USER" onClick={deleteHandler} className="btnCancel" />
      </div>
    </section>
  );
};
