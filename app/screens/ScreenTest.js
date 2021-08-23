import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenContainer from "./../components/Card";
import RecordCard from "./../components/RecordCard";
import {
  Center,
  useColorModeValue,
  Button,
  useColorMode,
  Text,
  Box,
  ZStack,
  Container,
  Heading,
  HStack,
  VStack,
} from "native-base";
const ScreenTest = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const colorScheme = useColorModeValue("teal", "amber");
  const variant = useColorModeValue("solid", "outline");
  return (
    <LocalWrapper>
      <Text mt={20} fontSize="xl" fontWeight="bold">
        Unit Name{" "}
      </Text>
      <HStack space={1}>
        {/* <Button
        colorScheme={colorMode === "light" ? "blue" : "red"}
        onPress={() => {
          toggleColorMode();
        }}
      >
        Change mode
      </Button> */}
        <Box
          bg="primary.400"
          size={20}
          width="90%"
          height="10"
          rounded="lg"
          shadow={3}
          mt={5}
          p={3}
          _text={{
            fontSize: "md",
            fontWeight: "bold",
            color: "white",
            alignSelf: "center",
          }}
        >
          Owner Name
        </Box>
      </HStack>
    </LocalWrapper>
  );
};

export default ScreenTest;

const styles = StyleSheet.create({});

const LocalWrapper = ({ children }) => {
  const bg = useColorModeValue("blue.200", "gray.800");
  return (
    <>
      <Center
        flex={0.2}
        bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0],
          },
        }}
      >
        {children}
      </Center>
      <Container flex={0.8}>
        <ScreenContainer />
      </Container>
    </>
  );
};
