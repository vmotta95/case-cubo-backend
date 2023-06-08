import { TokenManagerMock } from "../mocks/TokenManagerMock";
import { HashManagerMock } from "../mocks/HashManagerMock";
import { IdGeneratorMock } from "../mocks/IdGeneratorMock";
import { UserBusiness } from "../../src/business/UserBusiness";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { LoginInputDTO } from "../../src/dtos/user/login.dto";
import { SignupInputDTO } from "../../src/dtos/user/signup.dto";

const userBusiness = new UserBusiness(
  new UserDatabaseMock(),
  new IdGeneratorMock(),
  new TokenManagerMock(),
  new HashManagerMock()
);

describe("Testando Signup", () => {
  it("Caso de sucesso Signup, token gerado", async () => {
    const input: SignupInputDTO = {
      name: "ciclana",
      email: "ciclana@gmail.com",
      password: "ciclana",
    };

    const output = await userBusiness.signup(input);

    expect(output).toEqual({
      message: "Cadastro realizado com sucesso",
      token: "token-mock",
    });
  });
});
