import { Box, Grid } from '@mui/material';

export default function Login() {


  return (
    <Box sx={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
        <Grid container >
            <Grid item xs={6} sx={{border:"1px solid"}}>
                A
            </Grid>
            <Grid item xs={6} sx={{border:"1px solid"}}>
                B
            </Grid>
            <Grid item xs={6} sx={{border:"1px solid"}}>
                C
            </Grid>
            <Grid item xs={6} sx={{border:"1px solid"}}>
                D
            </Grid>
        </Grid>
    </Box>
  )
}
