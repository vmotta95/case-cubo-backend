import { TokenManagerMock } from './../mocks/TokenManagerMock';
import { HashManagerMock } from "./../mocks/HashManagerMock";
import { IdGeneratorMock } from "./../mocks/IdGeneratorMock";
import { UserBusiness } from "./../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { LoginInputDTO } from "../../src/dtos/user/login.dto";

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new IdGeneratorMock(),
  new TokenManagerMock(),
  new HashManagerMock()
);

describe("Testando login", () => {
  it("Caso de sucesso, token gerado", async () => {
    const input: LoginInputDTO = {
      email: "fulano@email.com",
      password: "fulano123",
    };
    const output = await userBusiness.login(input);

    expect(output).toEqual({
        message: "Login realizado com sucesso",
        token: "token-mock-fulano",
    })
  });

  
});
