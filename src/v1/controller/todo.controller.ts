import { TodoInstance } from "./../entities/todo.entities";
import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import TodoService from "../service/todo.service";
import { BaseResponse } from "../utils/base.response.utils";

class TodoController {
  private todoService;
  constructor() {
    this.todoService = new TodoService();
  }

  create = async (req: Request, res: Response) => {
    const id = uuidv4();
    try {
      //   const todo = await TodoInstance.create({ ...req.body, id });
      const todo = await this.todoService.create({ ...req.body, id });
      return res.status(200).json({ status: 200, msg: "success", data: todo });
    } catch (error) {
      return res
        .status(500)
        .json({ msg: "fail to create", status: 500, data: null });
    }
  };

  readPagination = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response: BaseResponse = new BaseResponse();
      const limit: number = +(req.query.limit as string);
      const offset: number = +(req.query.offset as string);

      //   const todos = await TodoInstance.findAll({ where: {}, limit, offset });
      const todos = await this.todoService.readPagination(limit, offset);
      response.setData(todos);
      return res.status(200).json({
        status: 200,
        msg: "get list todo success",
        data: response,
      });
    } catch (error) {
      return res.status(500).json({ status: 500, msg: "fail", data: null });
    }
  };

  readById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //   const todo = await TodoInstance.findOne({
      //     where: { id: req.params.id as string },
      //   });
      const todo = await this.todoService.getDetail(req.params.id);
      return res
        .status(200)
        .json({ status: 200, msg: "get success", data: todo });
    } catch (error) {
      return res.status(500).json({ status: 500, msg: "get fail", data: null });
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      //   const todo = await TodoInstance.update(req.body, {
      //     where: { id: req.params.id },
      //     returning: true,
      //   });
      const todo = await this.todoService.update(req.params.id, req.body);
      return res
        .status(200)
        .json({ status: 200, msg: "update todo success", data: todo });
    } catch (error) {
      return res
        .status(500)
        .json({ status: 500, msg: "update todo fail", data: null });
    }
  };
}

export default new TodoController();
