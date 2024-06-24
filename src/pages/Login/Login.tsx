import { Box, Typography } from "@mui/material";
import { LoginForm } from "./LoginForm";

export default function Login() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        background: "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
      }}
    >
      <Box
        sx={{
          background: "white",
          width: "30vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "10%",
        }}
      >
        <LoginForm />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "72px",
              color: "white",
            }}
          >
            Learning Styles
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              color: "lightgrey",
            }}
          >
            Descubra seu estilo de aprendizado
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
