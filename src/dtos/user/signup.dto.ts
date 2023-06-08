import z from "zod";

export interface CreateUserInputDTO {
  first_name: string;
  last_name: string;
  participation: number;
}

export interface CreateUserOutputDTO {
  message: string;
}

export const CreateUserSchema = z
  .object({
    first_name: z.string().nonempty().min(1),
    last_name: z.string().nonempty(),
    participation: z.number().min(2),
  })
  .transform((data) => data as CreateUserInputDTO);
