import * as z from "zod";
export const signUpValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2).max(10),
  email: z.string().email("enter valid email"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
