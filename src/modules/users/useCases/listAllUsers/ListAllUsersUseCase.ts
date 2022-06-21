/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ user_id }: IRequest): Promise<User[]> {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
