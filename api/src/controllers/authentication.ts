import express from "express";

import {
  createUser,
  getUserBySessionToken,
  getUserByUsername,
} from "../db/users";
import { authentication, random } from "../helpers";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.sendStatus(400);
    }

    const user = await getUserByUsername(username).select(
      "+authentication.salt +authentication.password"
    );

    if (!user) {
      return res.sendStatus(401);
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password != expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();

    res.cookie("accessToken", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const logout = async (req: express.Request, res: express.Response) => {
  try {
    const token = req.cookies.accessToken;
    const user = await getUserBySessionToken(token);

    if (!user) {
      return res.sendStatus(401);
    }

    res.clearCookie("accessToken");

    return res.status(200).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const {
      email,
      password,
      username,
      firstName,
      lastName,
      phone = "",
      country = "",
    } = req.body;

    if (
      !username ||
      !password ||
      !username ||
      !firstName ||
      !lastName ||
      !email
    ) {
      return res.sendStatus(400);
    }

    const existingUser = await getUserByUsername(username);

    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      firstName,
      lastName,
      ...(country && { country }),
      ...(phone && { phone }),
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
