import express from "express";

import {
  getAllUsers,
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/users";
import { isAuthenticated, isNotOwner } from "../middlewares";

export default (router: express.Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.get("/users/:id", isAuthenticated, getUser);
  router.delete("/users/:id", isAuthenticated, isNotOwner, deleteUser);
  router.patch("/users/:id", isAuthenticated, updateUser);
};
