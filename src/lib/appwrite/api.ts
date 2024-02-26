import { TNewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export async function createUserAccount(user: TNewUser) {
  try {
    const newAccout = await account.create(
      ID.unique(),
      user.email,
      user.name,
      user.password
    );
    return newAccout;
  } catch (error) {
    console.log(error);
    return error;
  }
}
