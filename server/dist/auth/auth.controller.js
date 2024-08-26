"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const argon2_1 = require("argon2");
const prisma_1 = require("../prisma");
const generateToken_1 = require("./generateToken");
// @desc Register user
// @route POST /api/auth/register
// @access Public
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name, password } = req.body;
    const isHaveUser = yield prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (isHaveUser) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = yield prisma_1.prisma.user.create({
        data: {
            name: name,
            email: email,
            password: yield (0, argon2_1.hash)(password),
        },
    });
    const token = (0, generateToken_1.generateToken)(user.id);
    res.json({ user, token });
});
exports.registerUser = registerUser;
// @desc Auth user
// @route POST /api/auth/login
// @access Public
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () { });
exports.loginUser = loginUser;
