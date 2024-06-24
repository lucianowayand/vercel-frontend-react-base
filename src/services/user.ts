import { AxiosResponse } from "axios";
import { api } from "./axios";
import { UserDTO } from "../dto/user.dto";

const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<AxiosResponse<{ authToken: string }>> => {
  return api.post("users/login", { email, password });
};

const register = ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}): Promise<AxiosResponse<UserDTO>> => {
  return api.post("users", { email, password, name });
};

export const UserService = {
  login,
  register,
};
