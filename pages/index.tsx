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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

export default function Index() {
  const router = useRouter();
  return (
    <Center borderWidth={"0px"} height={"100vh"}>
      <VStack w="100%" borderWidth={"0px"} spacing={10} height={"500px"}>
        <VStack height={"100vh"} width="100%" bgColor="green.50" spacing={5} p="10">
          <Button
            onClick={() => router.push("/components/monthlyRenewalList")}
            size="lg"
            w="400px"
            h="70px"
            colorScheme={"teal"}
            fontSize="30px"
          >
            Monthly PP Renewal List
          </Button>
          <Button
            onClick={() => router.push("/components/doctorInfo")}
            size="lg"
            w="400px"
            h="70px"
            colorScheme={"teal"}
            fontSize="30px"
            value={"Wallet Card"}
          >
            Doctor Info
          </Button>
          <Button
            onClick={() => router.push("#")}
            size="lg"
            w="400px"
            h="70px"
            colorScheme={"teal"}
            fontSize="30px"
            value={""}
          >
            
          </Button>
          <Button
            onClick={() => router.push("#")}
            size="lg"
            w="400px"
            h="70px"
            colorScheme={"teal"}
            fontSize="30px"
            value={""}
          >
           
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
}
