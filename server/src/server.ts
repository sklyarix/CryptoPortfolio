import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import express from "express";

import authRoutes from "./auth/auth.routes";

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.HOST_PORT || 4000;

app.use(express.json());

async function main() {
  /* START_Routes */
  app.use("/api/auth", authRoutes);

  /* END_Routes */

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
