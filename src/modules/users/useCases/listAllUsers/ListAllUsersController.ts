/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params as { user_id: string };
    try {
      const users = await this.listAllUsersUseCase.execute({ user_id });

      return response.status(201).json({
        error: false,
        data: users,
      });
    } catch (error) {
      return response.status(400).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { ListAllUsersController };
