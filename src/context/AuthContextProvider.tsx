import { createContext, useEffect, useState } from "react";
import { UserService } from "../services/user";
import { Box, Typography } from "@mui/material";

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
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsConnected(true);
    }
  }, []);

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
      setIsConnected(true);
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
      {isConnected && children && (
        <Box
          sx={{
            borderBottom: "1px solid #E0E0E0",
            height: "5vh",
            display: "flex",
            flexDirection: "row",
            justifyContent: "right",
            alignItems: "center",
            paddingX: "20px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeigth: 600,
              cursor: "pointer",
            }}
            onClick={logout}
          >
            Sair
          </Typography>
        </Box>
      )}
      {children}
    </AuthContext.Provider>
  );
};
