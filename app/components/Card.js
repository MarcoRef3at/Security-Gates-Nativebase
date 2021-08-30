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
  Flex,
  Heading
} from "native-base";
import RecordPopOver from "./RecordPopOver";
import RecordCard from "./RecordCard";
export default function ScreenContainer() {
  return (
    <Stack space={4} p={[4, 4, 8]}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Text bold color="blue.400" m={[4, 4, 8]}>
          Valid for : 2 days
        </Text>
        <Text bold color="blue.400" m={[4, 4, 8]}>
          Until : 22 June 2021
        </Text>
      </Box>
      <RecordCard />
    </Stack>
  );
}
