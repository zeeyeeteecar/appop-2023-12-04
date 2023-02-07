import React from "react";
import { Box, Text, Center, HStack } from "@chakra-ui/react";

export default function ListCount({ count }) {
  return (
    <Center h="40px" bgColor={"yellow.100"} alignContent="center" rounded={10} padding={5} borderWidth={1}>
      <HStack>
        <Text
          color="gray.300"
          w="150px"
          alignContent="center"
          align={"center"}
          fontSize="lg"
          borderWidth={0}
          verticalAlign="middle"
        >
          Total Record(s):
        </Text>
        <Text
          color="red.500"
          w="50px"
          alignContent="center"
          align={"center"}
          fontSize="lg"
          borderWidth={0}
          verticalAlign="middle"
        >
          {count}
        </Text>
      </HStack>
    </Center>
  );
}
