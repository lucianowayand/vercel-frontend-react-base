import { createContext } from "react";
import { UserService } from "../services/user";

export const AuthContext = createContext<{
  login: ({ email, password }: { email: string; password: string }) => void;
  logout: () => void;
}>({
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const res = await UserService.login({ email, password });
      localStorage.setItem("token", res.data.authToken);
      window.location.href = "/models";
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
