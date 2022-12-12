import express from "express";
import UserController from "../controller/user.controller";

export const routes = express.Router();

// * Register
routes.post("/register", UserController.register);

// * Login
routes.post("/login", UserController.login);

// * Logout
routes.post("/logout", UserController.logout);
