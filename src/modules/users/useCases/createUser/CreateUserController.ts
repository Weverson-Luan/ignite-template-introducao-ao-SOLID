/* eslint-disable prettier/prettier */
import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    const user = await this.createUserUseCase.execute({
      name,
      email,
    });

    return response.status(201).json({
      error: false,
      data: user,
    });
  }
}

export { CreateUserController };
