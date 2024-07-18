import React from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ログイン
        </Typography>
        <TextField
          id="email"
          name="email"
          label="Email"
          type="email"
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth
          required
          margin="normal"
          variant="outlined"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            formAction={login}
            sx={{ mr: 1 }}
          >
            Log in
          </Button>
          <Button variant="outlined" color="secondary" formAction={signup}>
            Sign up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
