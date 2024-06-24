import { createContext, useState } from "react";
import { UserService } from "../services/user";
import { CircularProgress } from "@mui/material";

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
  const [loading, setLoading] = useState<boolean>(false);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoading(true);

    const res = await UserService.login({ email, password });
    localStorage.setItem("token", res.data.authToken);
    window.location.href = "/models";

    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {!loading && children}

      {loading && (
        <CircularProgress
          sx={{ position: "absolute", top: "50%", left: "50%" }}
        />
      )}
    </AuthContext.Provider>
  );
};
