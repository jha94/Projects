import React, {useState} from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { validationData } from '../Utils'

const theme = createTheme();

export default function SignIn({navigateToHomePage}) {
  const [isUserID, setUserID] = useState(true)
  const [isValidPassword, checkPassword] = useState(true)
  const {validPasswords, UserIDWarningMsg, wrongPasswordWarningMsg} = validationData
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if(!data.get('email')){
      setUserID(false)
    } else if(!validPasswords.includes(data.get('password'))){
      checkPassword(false)
    } else {
      navigateToHomePage(true)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="User ID or Mobile Number"
              name="email"
              autoComplete="email"
              autoFocus
              error={!isUserID}
              helperText={!isUserID && UserIDWarningMsg}
              onChange={({target:{value}})=>{
                  setUserID(value)
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={!isValidPassword}
              helperText={!isValidPassword && wrongPasswordWarningMsg}
              onChange={({target:{value}})=>{
                checkPassword(value)
            }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}