import { Request, Response } from "express";
import { hash } from "argon2";
import { prisma } from "../prisma";
import { generateToken } from "./generateToken";

// @desc Register user
// @route POST /api/auth/register
// @access Public
export const registerUser = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;

  const isHaveUser = await prisma.user.findUnique({
    where: { email },
  });

  if (isHaveUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: await hash(password),
    },
  });

  const token = generateToken(user.id);

  res.json({ user, token });
};

// @desc Auth user
// @route POST /api/auth/login
// @access Public
export const loginUser = async (req: Request, res: Response) => {};
