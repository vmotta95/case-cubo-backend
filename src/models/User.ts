export interface UserDB {
  first_name: string;
  last_name: string;
  participation: number;
}

export interface UserModel {
  first_name: string;
  last_name: string;
  participation: number;
}

export class User {
  constructor(
    public first_name: string,
    public last_name: string,
    public participation: number
  ) {}

  public toDBModel(): UserDB {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      participation: this.participation,
    };
  }

  public toBusinessModel(): UserModel {
    return {
      first_name: this.first_name,
      last_name: this.last_name,
      participation: this.participation,
    };
  }
}
