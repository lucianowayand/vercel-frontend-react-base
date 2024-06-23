import { Box, Button, InputBase, Typography } from "@mui/material";
import { useState } from "react";
import { UserService } from "../../services/user";

export default function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  // const navigate = useNavigate();
  // navigate("/models");

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) return;

    const res = await UserService.login({ email, password: "123" });
    localStorage.setItem("token", res.data.authToken);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: "1px solid gray",
          borderRadius: "8px",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          gap: "20px",
        }}
        component="form"
        onClick={(event) => handleClick(event)}
      >
        <Typography>Página de Login</Typography>

        <Box>
          <Typography>Email</Typography>
          <InputBase
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            sx={{ border: "1px solid black", borderRadius: "8px" }}
            required
          />
        </Box>

        <Box>
          <Typography>Senha</Typography>
          <InputBase
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            sx={{ border: "1px solid black", borderRadius: "8px" }}
            required
          />
        </Box>

        <Button variant="contained" type="submit">
          Entrar
        </Button>
      </Box>
    </Box>
  );
}
