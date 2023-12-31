import express from "express";

import { deleteUserById, getUsers, getUserById } from "../db/users";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400).send(error);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { email, firstName, lastName, phone, country } = req.body;

    if (!email || !firstName || !lastName) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    if (phone) {
      user.phone = phone;
    }
    if (country) {
      user.country = country;
    }
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
