import { UserDatabase } from "../database/UserDatabase";
import { GetUsersOutputDTO } from "../dtos/user/getUsers.dto";
import {
  CreateUserInputDTO,
  CreateUserOutputDTO,
} from "../dtos/user/signup.dto";
import { User } from "../models/User";

export class UserBusiness {
  constructor(private userDatabase: UserDatabase) {}

  public createUserB = async (
    input: CreateUserInputDTO
  ): Promise<CreateUserOutputDTO> => {
    const { first_name, last_name, participation } = input;
    const newUser = new User(first_name, last_name, participation);

    await this.userDatabase.insertUser(newUser);
    const output: CreateUserOutputDTO = {
      message: "User created Sucessfuly",
    };
    return output;
  };

  public getUserB = async () => {
    const usersDB = await this.userDatabase.findUser();

    const users = usersDB.map((userDB) => {
      const user = new User(
        userDB.first_name,
        userDB.last_name,
        userDB.participation
      );

      return user.toBusinessModel();
    });

    const output: GetUsersOutputDTO = users;

    return output;
  };
}
