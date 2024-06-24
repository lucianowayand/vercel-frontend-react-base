import {
  Box,
  Button,
  CircularProgress,
  Input,
  InputLabel,
  Link,
  Typography,
} from "@mui/material";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { UserService } from "../../services/user";

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [signUp, setSignUp] = useState<boolean>(false);

  const { login } = useContext(AuthContext);

  const handleClick = async () => {
    setLoading(true);

    if (signUp) {
      try {
        const { data } = await UserService.register({ email, password, name });
        if (data) {
          await login({ email, password });
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      await login({ email, password });
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h4" fontFamily="Inter">
        LOGIN
      </Typography>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "80px",
          marginBottom: "20px",
        }}
        onSubmit={(event) => {
          event.preventDefault();
          handleClick();
        }}
      >
        {signUp && (
          <Box>
            <InputLabel>Nome</InputLabel>
            <Input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Box>
        )}

        <Box>
          <InputLabel>Email</InputLabel>
          <Input
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
        </Box>

        <Box>
          <InputLabel>Senha</InputLabel>
          <Input
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{
            fontFamily: "Inter",
            fontWeight: 600,
            marginBottom: "20px",

            marginTop: "40px",
          }}
        >
          {loading && (
            <CircularProgress
              sx={{
                color: "white",
              }}
              size="24px"
            />
          )}
          {!loading && (signUp ? "Cadastrar-se" : "Entrar")}
        </Button>
      </Box>
      <Link
        sx={{
          fontFamily: "Inter",
          color: "light-blue",
          cursor: "pointer",
        }}
        onClick={(event) => {
          event.preventDefault();
          setSignUp((prev) => !prev);
        }}
      >
        {signUp ? "Voltar ao login" : "Ainda não possui uma conta?"}
      </Link>
    </Box>
  );
};
