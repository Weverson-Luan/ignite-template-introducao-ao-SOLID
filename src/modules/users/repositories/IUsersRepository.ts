/* eslint-disable prettier/prettier */
import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUsersRepository {
  create({ name, email }: ICreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): User | undefined;
  turnAdmin(user: User): User;
  list(): Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO };
