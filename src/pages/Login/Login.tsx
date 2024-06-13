import { Box, Button, InputBase, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('')

    const navigate = useNavigate()

  const handleClick = async () => {
    navigate('/models')
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
