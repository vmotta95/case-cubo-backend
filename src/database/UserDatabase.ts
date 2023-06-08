import { BaseDatabase } from "./BaseDatabase";
import { UserDB } from "../models/User";

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "users";

  public async insertUser(newUserDB: UserDB): Promise<void> {
    await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(newUserDB);
  }

  public async findUser() {
    const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS);
    return result;
  }
}
