import React from "react";
import {
  VStack,
  HStack,
  Avatar,
  Image,
  Text,
  NativeBaseProvider,
  AspectRatio,
  Center,
  Box,
  Stack,
  Heading,
} from "native-base";
import RecordPopOver from "./RecordPopOver";
import RecordCard from "./RecordCard";
export default function ScreenContainer() {
  return (
    <Stack space={4} p={[4, 4, 8]}>
      <Text bold position="absolute" color="blue.400" top={0} m={[4, 4, 8]}>
        Valid for : 2 days
      </Text>
      <Text
        bold
        position="absolute"
        left={220}
        color="blue.400"
        top={0}
        m={[4, 4, 8]}
      >
        Until : 22 June 2021
      </Text>
      <HStack alignItems="center">
        <RecordCard />
      </HStack>
    </Stack>
  );
}
