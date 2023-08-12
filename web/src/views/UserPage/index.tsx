import { useGetUserByIdQuery } from "@redux/users/users.api";
import { PageModes } from "models/common";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const { id, mode } = useParams();
  const { data: user } = useGetUserByIdQuery();

  const isEditMode = mode === PageModes.EDIT
  return (
    
  )
};
