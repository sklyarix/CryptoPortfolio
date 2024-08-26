import express from "express";
import { registerUser } from "./auth.controller";

const router = express.Router();

router.route("/register").post(registerUser);

export default router;
