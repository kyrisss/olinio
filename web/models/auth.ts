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

export type RegisterUserBody = Omit<User, "_id" | "phone">;
export type UpdateUserBody = Omit<User, "_id" | "password" | "username">;
