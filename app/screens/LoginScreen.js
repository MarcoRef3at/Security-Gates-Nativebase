import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import {
  NativeBaseProvider,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

import authApi from "./../api/auth";
import AuthContext from "./../auth/context";
import authStorage from "../auth/storage";
import Screen from "./../components/Screen";
import biometricsAuth from "./../auth/biometricsAuth";

const LoginScreen = () => {
  const [formData, setData] = useState({});
  const [errors, setErrors] = useState({});
  const authContext = useContext(AuthContext);

  const handleSubmit = async ({ username, password }) => {
    validate();
    if (username && password) {
      const result = await authApi
        .login(username, password)
        .catch((e) => e.response);

      //   let response = result.data["Cki"] || result.data["Error"];
      let response = result.data["token"] || result.data["error"];
      console.log("response:", response);
      //   if (response == "Invalid password" || response == "Unregistered mail")
      if (response == "Invalid Password" || response == "Invalid Credentials") {
        authContext.setIsAuthourized(false);
        return setErrors({
          ...errors,
          username: "Invalid Credentials",
          password: "Invalid Credentials",
        });
      }

      setErrors({});

      // const token = result.data.Cki;
      const token = response;
      authContext.setIsAuthourized(true);
      console.log("token:", token);
      authStorage.storeToken(token);
      //   auth.logIn(result.data);
    }
  };

  const validate = () => {
    if (formData.username === undefined) {
      setErrors({
        ...errors,
        username: "username is required",
      });
      return false;
    } else if (formData.username.length < 3) {
      setErrors({
        ...errors,
        username: "username is too short",
      });
      return false;
    }
    if (formData.password === undefined) {
      setErrors({
        ...errors,
        password: "Password is required",
      });
      return false;
    } else if (formData.password.length < 6) {
      setErrors({
        ...errors,
        password: "Password is too short",
      });
      return false;
    }
    return true;
  };

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token)
      await biometricsAuth()
        .then(() => authContext.setIsAuthourized(true))
        .catch(() => authContext.setIsAuthourized(false));
  };

  React.useEffect(() => {
    restoreToken();
  }, []);
  return (
    <Screen>
      <Box safeArea flex={1} p={2} w="90%" mx="auto">
        <Heading size="lg" color="primary.500">
          Welcome
        </Heading>
        <Heading color="muted.400" size="xs">
          Sign in to iGouna!
        </Heading>

        <VStack space={2} mt={5}>
          {/* UserName */}
          <FormControl isRequired>
            {/* UserName label */}
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Username
            </FormControl.Label>
            {/* Username Input */}
            <Input
              onChangeText={(username) => setData({ ...formData, username })}
              variant="rounded"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {/* Username Error Message */}
            {"username" in errors && (
              <FormControl.HelperText
                _text={{ fontSize: "xs", color: "error.500", fontWeight: 500 }}
              >
                {errors.username}
              </FormControl.HelperText>
            )}
          </FormControl>

          {/* Password */}
          <FormControl mb={5} isRequired>
            {/* Password Label */}
            <FormControl.Label
              _text={{ color: "muted.700", fontSize: "sm", fontWeight: 600 }}
            >
              Password
            </FormControl.Label>
            {/* Password Input */}
            <Input
              type="password"
              onChangeText={(password) => setData({ ...formData, password })}
              variant="rounded"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {/* Password Error Message */}
            {"password" in errors && (
              <FormControl.HelperText
                _text={{ fontSize: "xs", color: "error.500", fontWeight: 500 }}
              >
                {errors.password}
              </FormControl.HelperText>
            )}
          </FormControl>

          {/* Login Button */}

          <Button
            variant="rounded"
            w="90%"
            onPress={() => handleSubmit(formData)}
            colorScheme="cyan"
            _text={{ color: "red" }}
          >
            Login
          </Button>
        </VStack>
      </Box>
    </Screen>
  );
};

export default LoginScreen;
