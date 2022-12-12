import { NextFunction, Request, Response } from "express";
import jwtUtils from "../utils/jwt.utils";
import UserService from "../service/user.service";
import SessionService from "../service/session.service";

class UserController {
  private userService;
  private sessionService;

  constructor() {
    this.userService = new UserService();
    this.sessionService = new SessionService();
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.createUser(req.body);
      return res.status(200).json({ data: user });
    } catch (error) {
      return res.status(500).json({ message: "server error!!" });
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.userService.validatePassword(req.body);

      if (!user) {
        return res
          .status(401)
          .json({ message: "Invalid username or password" });
      }

      const session = await this.sessionService.createSession(
        user._id,
        req.get("user-agent") || ""
      );

      const accessToken: string = jwtUtils.sign(
        { ...user, session: session._id },
        { expiresIn: "15m" }
      );

      const refreshToken: string = jwtUtils.sign(user, { expiresIn: "1y" });

      return res.status(200).json({ data: { accessToken, refreshToken } });
    } catch (error) {
      return res.status(500).json({ message: "server error!!" });
    }
  };

  logout = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { session_id: sessionId } = req.body;

      const session = await this.sessionService.updateSession(sessionId);
      return res.status(200).json({ data: session });
    } catch (error) {
      console.log(error);
    }
  };
}

export default new UserController();
