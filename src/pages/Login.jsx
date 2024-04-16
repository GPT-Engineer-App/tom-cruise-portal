import React from "react";
import { Box, Button, Input, VStack, Heading, useToast } from "@chakra-ui/react";

const Login = () => {
  const toast = useToast();

  const handleLogin = () => {
    localStorage.setItem("auth_token", "your_token_here");
    toast({
      title: "Login Successful",
      description: "You have been logged in.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    window.location.href = "/";
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Heading>Login</Heading>
        <Input placeholder="Username" />
        <Input placeholder="Password" type="password" />
        <Button onClick={handleLogin}>Login</Button>
      </VStack>
    </Box>
  );
};

export default Login;
