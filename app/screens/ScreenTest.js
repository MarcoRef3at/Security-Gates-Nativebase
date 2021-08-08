import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Center, useColorModeValue, Button, useColorMode } from "native-base";
const ScreenTest = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorScheme = useColorModeValue("teal", "amber");
  const variant = useColorModeValue("solid", "outline");
  return (
    <LocalWrapper>
      <Button colorScheme={colorScheme} variant={variant}>
        Sample
      </Button>
      <Button
        _light={{ bg: "teal", _text: { color: "white" } }}
        _dark={{ bg: "amber" }}
      >
        Sample
      </Button>
      <Button
        colorScheme={colorMode === "light" ? "blue" : "red"}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change mode
      </Button>
      <Center
        bg="emerald.400"
        _text={{ color: "white" }}
        rounded="xl"
        w={[24, 48, 72]}
        h={[24, 48, 72]}
      >
        This is a box
      </Center>
    </LocalWrapper>
  );
};

export default ScreenTest;

const styles = StyleSheet.create({});

const LocalWrapper = ({ children }) => {
  const bg = useColorModeValue("red.200", "gray.800");
  return (
    <Center flex={1} bg={bg}>
      {children}
    </Center>
  );
};
