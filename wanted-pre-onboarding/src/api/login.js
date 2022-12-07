import { setting } from "./setting";

export const login = async (email, password) => {
  return setting.post("/auth/signin", { email, password });
};