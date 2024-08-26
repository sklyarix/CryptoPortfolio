import jwt from "jsonwebtoken";

export const generateToken = (userId: number): string => {
  const secret = process.env.JWT_SECRET as string; // Явно указываем тип

  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign({ userId }, secret, { expiresIn: "1h" });
};
