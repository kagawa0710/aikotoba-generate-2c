"use client";
import React, { useState, useEffect } from "react";
import { login, signup } from "./actions";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    const formData = new FormData(event.currentTarget);
    if (!isLogin) {
      formData.append("userId", userId);
      formData.append("displayName", displayName);
    }
    try {
      const action = isLogin ? login : signup;
      const response = await action(formData);
      if (response.error) {
        setError(response.error);
      } else if (response.success) {
        setRedirect(true);
      }
    } catch (err: any) {
      setError(`予期せぬエラーが発生しました: ${err.message}`);
    }
  };

  useEffect(() => {
    if (redirect) {
      window.location.href = "/";
    }
  }, [redirect]);

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" gutterBottom>
          {isLogin ? "Log in" : "Sign up"}
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        {!isLogin && (
          <TextField
            label="User ID"
            id="userId"
            name="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
        )}
        {!isLogin && (
          <TextField
            label="Display Name"
            id="displayName"
            name="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
        )}
        <TextField
          label="Email"
          id="email"
          name="email"
          type="email"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          id="password"
          name="password"
          type="password"
          required
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isLogin && (
          <TextField
            label="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            fullWidth
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <Box mt={2}>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            {isLogin ? "Log in" : "Sign up"}
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleToggle}
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            {isLogin ? "Switch to Sign up" : "Switch to Log in"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
