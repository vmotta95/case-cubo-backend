import { Request, Response } from "express";
import { CreateUserSchema } from "../dtos/user/signup.dto";
import { ZodError } from "zod";
import { BaseError } from "../errors/BaseError";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public createUser = async (req: Request, res: Response) => {
    try {
      const input = CreateUserSchema.parse({
        first_name: req.body.name,
        last_name: req.body.nickname,
        participation: req.body.participation,
      });

      const output = await this.userBusiness.createUserB(input);
      res.status(201).send(output);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };

  public getUsers = async (req: Request, res: Response) => {
    try {
      const output = await this.userBusiness.getUserB();
      res.status(200).send(output);
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
}
