import React, { useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import {
  NativeBaseProvider,
  Text,
  Box,
  extendTheme,
  themeTools,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import DrawerNavigator from "./app/navigation/DrawerNavigator";

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
    Heading: {
      baseStyle: (props) => {
        return {
          color: themeTools.mode("red.300", "blue.300")(props),
        };
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
          {isAuthourized ? <DrawerNavigator /> : <AuthNavigator />}
          {/* {isAuthourized ? <AppNavigator /> : <AuthNavigator />} */}
          {/* <DrawerNavigator /> */}
        </NativeBaseProvider>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
