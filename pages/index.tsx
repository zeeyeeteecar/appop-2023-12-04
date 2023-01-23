import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Center,
  Box,
  VStack,
  Button,
  HStack,
  Text,
  IconButton,
  Flex,
  Radio,
  RadioGroup,
  useColorModeValue,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { url } from "inspector";
import img from "./images/bg_coffee.jpg";

export default function Index() {
  const router = useRouter();
  return (
    <Box
      id="imgbox"
      borderWidth={"0px"}
      height={"100vh"}
      width="100%"
      bgImage={"/bg_coffee.jpg"}
      bgPos="center"
      bgSize={"cover"}
    >
      <VStack
        w="900px"
        borderWidth={"0px"}
        height={"500px"}
        // bgColor="green.50"
        p="60px"
        spacing={10}
        // boxShadow={"2xl"}
        // bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        align={"center"}
      >
        <Button
          onClick={() => router.push("/components/monthlyRenewalList")}
          fontSize="20px"
          rounded={"full"}
          w="300px"
          h="60px"
          bgColor="blackAlpha.300"
          color="white"
          border={"1px"}
          borderColor={"gray.600"}
          _hover={{
            background: "gray.600",
            color: "white",
          }}

          // bgGradient={"linear(to-r, green.50,green.150)"}
        >
          Monthly PP Renewal List
        </Button>

        <Button
          onClick={() => router.push("/components/doctorInfo")}
          size="lg"
          rounded={"full"}
          w="300px"
          h="60px"
          bgColor="blackAlpha.300"
          color="white"
          border={"1px"}
          borderColor={"gray.600"}
          _hover={{
            background: "gray.600",
            color: "white",
          }}
          // bgGradient={"linear(to-r, green.50,green.150)"}
          fontSize="20px"
          value={"Doctor Info"}
        >
          Doctor Info
        </Button>

        <Button
          onClick={() => router.push("/components/walletCard")}
          size="lg"
          rounded={"full"}
          w="300px"
          h="60px"
          bgColor="blackAlpha.300"
          color="white"
          border={"1px"}
          borderColor={"gray.600"}
          _hover={{
            background: "gray.600",
            color: "white",
          }}
          // bgGradient={"linear(to-r, green.50,green.150)"}
          fontSize="20px"
          value={"Wallet Card"}
        >
          Wallet Card
        </Button>

        <Button
          onClick={() => router.push("#")}
          size="lg"
          rounded={"full"}
          w="300px"
          h="60px"
          bgColor="blackAlpha.300"
          color="white"
          border={"1px"}
          borderColor={"gray.600"}
          _hover={{
            background: "gray.600",
            color: "white",
          }}
          // bgGradient={"linear(to-r, green.50,green.150)"}
          fontSize="20px"
          value={""}
        ></Button>
      </VStack>
    </Box>
  );
}
