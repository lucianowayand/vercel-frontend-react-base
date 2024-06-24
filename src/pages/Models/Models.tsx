import { Box, Button, Grid } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

export default function Login() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleLogout}>
        Sair
      </Button>
      <Grid container>
        <Grid item xs={6} sx={{ border: "1px solid" }}>
          A
        </Grid>
        <Grid item xs={6} sx={{ border: "1px solid" }}>
          B
        </Grid>
        <Grid item xs={6} sx={{ border: "1px solid" }}>
          C
        </Grid>
        <Grid item xs={6} sx={{ border: "1px solid" }}>
          D
        </Grid>
      </Grid>
    </Box>
  );
}
