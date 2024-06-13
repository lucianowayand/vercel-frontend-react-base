import { Box, Button, InputBase, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('')

  const handleClick = async () => {
    const response = await axios.get('https://backend-learning-styles.vercel.app/')
    console.log(response)
  }

  return (
    <Box sx={{width:"100vw", height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
     <Box sx={{border:"1px solid gray", borderRadius:"8px", width:"250px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"20px", gap:"20px"}}>
     <Typography>
        Página de Login {email}
      </Typography>

      <Box>
      <Typography>
        Email
      </Typography>
      <InputBase onChange={(event) => setEmail(event.target.value)} sx={{border:"1px solid black", borderRadius:"8px"}}/>
      </Box>
      
      <Box>
      <Typography>
        Senha
      </Typography>
      <InputBase onChange={(event) => setEmail(event.target.value)} sx={{border:"1px solid black", borderRadius:"8px"}}/>
      </Box>

      <Button variant='contained' onClick={handleClick}>Entrar</Button>

     </Box>
    </Box>
  )
}
