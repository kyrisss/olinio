import { Option } from "./common";

export interface User {
  _id: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phone: string;
  username: string;
}

export type RegisterUserBody = Omit<User, "_id">;
export type UpdateUserBody = Omit<User, "_id" | "password" | "username">;
export interface RegistrationForm extends Omit<User, "_id" | "country"> {
  country: Option;
}
export type LoginForm = Pick<User, "username" | "password">;
export type UpdateUserForm = Omit<RegistrationForm, "username" | "password">;
