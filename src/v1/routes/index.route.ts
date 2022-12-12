import express, { Express, Request, Response } from "express";
import { routes as userRoutes } from "./user.route";
import { routes as todoRoutes } from "./todo.route";

const router = express.Router();

const routes = (app: Express) => {
  router.get("/heal-check", (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  // ! USER ROUTES
  router.use(userRoutes);

  // ! TODO ROUTES
  router.use(todoRoutes);

  app.use("/api", router);
};

export default routes;
