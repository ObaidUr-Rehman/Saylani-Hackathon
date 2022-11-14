import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const Login = () => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 className='myheading'>ADMIN LOGIN</h1>
      <TextField id="filled-basic"  type="email" label="Admin Email" variant="filled" placeholder="Enter Admin Email"/>
      <TextField id="filled-basic" type="password" label="Password" variant="filled" placeholder="Enter Password"/>
      <br />
      <Button style={{textAlign:"center"}} variant="contained">Login</Button>    
      </Box>
  )
}

export default Login
