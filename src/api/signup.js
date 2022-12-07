import { setting } from "./setting";

export const signup = async (email, password) => {
  return setting.post("/auth/signup", { email, password });
};