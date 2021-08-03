import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import { NativeBaseProvider, Text, Box, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

// 2. Extend the theme to include custom colors, fonts, etc
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};

const theme = extendTheme({
  colors: newColorTheme,
  components: {
    Button: {
      variants: {
        rounded: ({ colorScheme }) => {
          return {
            bg: `${colorScheme}.500`,
            rounded: "full",
          };
        },
      },
    },
  },
});

export default function App() {
  const [token, setToken] = useState();
  const [isAuthourized, setIsAuthourized] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token) setToken(token);
  };

  const resetValidation = async () => {
    await authStorage.removeValidationStatus();
  };

  const restoreValidationStatus = async () => {
    const validation = await authStorage.getValidationStatus();
    console.log("validation:", validation);
    if (validation) setIsValid(validation);
  };

  useEffect(() => {
    resetValidation();
    restoreValidationStatus();
    // restoreToken();
  }, []);

  if (!isReady)
    return (
      <AppLoading
        startAsync={() => resetValidation}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );

  return (
    <AuthContext.Provider value={{ isAuthourized, setIsAuthourized }}>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          {isAuthourized ? <AppNavigator /> : <AuthNavigator />}
        </NativeBaseProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
