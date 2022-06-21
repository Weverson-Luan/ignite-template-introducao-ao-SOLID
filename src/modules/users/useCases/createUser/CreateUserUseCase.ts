/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, name }: IRequest): Promise<User> {
    const user = this.usersRepository.create({
      name,
      email,
    });

    return user;
  }
}

export { CreateUserUseCase };
