import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Center,
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

export default function Index() {
  const router = useRouter();
  return (
    <Center borderWidth={"0px"} height={"100vh"} bgColor="green.50">
      <VStack w="500px" borderWidth={"0px"} height={"500px"} spacing={10}>
        <VStack
          height={"100vh"}
          width="100%"
          bgColor="green.50"
          spacing={5}
          p="10"
          boxShadow={"2xl"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          align={"center"}
        >
          <Button
            onClick={() => router.push("/components/monthlyRenewalList")}
            fontSize="20px"
            rounded={"full"}
            w="300px"
            h="50px"
            bgColor="green.100"
            color="green"
            bgGradient={"linear(to-r, green.50,green.150)"}
          >
            Monthly PP Renewal List
          </Button>

          <Button
            onClick={() => router.push("/components/doctorInfo")}
            size="lg"
            rounded={"full"}
            w="300px"
            h="50px"
            bgColor="green.100"
            color="green"
            bgGradient={"linear(to-r, green.50,green.150)"}
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
            h="50px"
            bgColor="green.100"
            color="green"
            bgGradient={"linear(to-r, green.50,green.150)"}
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
            h="50px"
            bgColor="green.100"
            color="green"
            bgGradient={"linear(to-r, green.50,green.150)"}
            fontSize="20px"
            value={""}
          ></Button>

          <Button
            onClick={() => router.push("#")}
            size="lg"
            rounded={"full"}
            w="300px"
            h="50px"
            bgColor="green.100"
            color="green"
            bgGradient={"linear(to-r, green.50,green.150)"}
            fontSize="20px"
            value={""}
          ></Button>

          <Button
            onClick={() => router.push("#")}
            size="lg"
            rounded={"full"}
            w="300px"
            h="50px"
            bgColor="green.100"
            color="green"
            bgGradient={"linear(to-r, green.50,green.150)"}
            fontSize="20px"
            value={""}
          ></Button>
        </VStack>
      </VStack>
    </Center>
  );
}
