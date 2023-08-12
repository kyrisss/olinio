import React from "react";
import { generatePath, Link } from "react-router-dom";

import { useGetUsersQuery } from "@redux/users/users.api";
import { ROUTES } from "@routes/config";

export const UserListPage = () => {
  const { data: users } = useGetUsersQuery();
  return (
    <section className="section">
      <div>
        {users?.map(({ firstName, lastName, _id }) => {
          const route = generatePath(ROUTES.USER, { id: _id, mode: "view" });
          return <Link to={route} key={_id} className="userLink">{`${firstName} ${lastName}`}</Link>;
        })}
      </div>
    </section>
  );
};
