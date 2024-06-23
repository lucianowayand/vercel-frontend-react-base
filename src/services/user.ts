import { AxiosResponse } from "axios";
import { api } from "./axios";

const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AxiosResponse<{ authToken: string }>> => {
  return api.post("users/login", { email, password });
};

export const UserService = {
  login,
};
