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
  Heading
} from "native-base";
export default function RecordCard() {
  return (
    <Box shadow={9} rounded="lg">
      <Image
        source={{
          uri: "https://egyptconsulate.co.uk/wp-content/uploads/2021/06/NationalID-1.jpg"
        }}
        alt="image base"
        resizeMode="cover"
        height={150}
        width={350}
        roundedTop="md"
      />
      {/* <Text bold position="absolute" color="white" top={0} m={[4, 4, 8]}>
        NEWS
      </Text> */}
      <Stack space={4} p={[4, 4, 8]}>
        <Heading color="black" size={["sm", "md", "sm"]} noOfLines={1}>
          Name:
        </Heading>
        <Heading color="black" size={["sm", "md", "sm"]} noOfLines={1}>
          ID:
        </Heading>
        <Heading color="black" size={["sm", "md", "sm"]} noOfLines={1}>
          Job:
        </Heading>
      </Stack>
    </Box>
  );
}
