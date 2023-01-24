import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Center,
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

export default function Index() {

  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handle_login = () => {
    const envUserName: string = process.env.REACT_APP_USER_NAME;
    const envUserPassword: string = process.env.REACT_APP_USER_PASSWORD;

    if (envUserName === userName && envUserPassword === userPassword) {
      console.log("okok");
      router.push('/MainMenu')

    }else{console.log("fail");}
  };

  console.log(userName);
  console.log(userPassword);

  return (
    <Center
      borderWidth={0}
      h={"100vh"}
      w="100%"
      bgImage={"/coffee_1.jpg"}
      bgPos="center"
      bgSize={"cover"}
      padding-top="300px"
    >
      <VStack
        w="400px"
        h="200px"
        spacing={4}
        //bg="rgba(255,255,255,0.5)"
        backdropBlur={"6px"}
        rounded={"xl"}
        boxShadow={"2xl"}
        p={5}
      >
        <HStack minHeight={"100px"} w={"100px"} borderWidth="0px">
          <Text
            w={"200px"}
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            color={"white"}
          ></Text>
        </HStack>
        <HStack>
          <Text
            w={"200px"}
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            color={"white"}
          >
            User Name:
          </Text>
          <Input
            bgColor={"white"}
            defaultValue={""}
            onChange={(e) => setUserName(e.target.value)}
          />
        </HStack>

        <HStack>
          <Text
            w={"200px"}
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            color={"white"}
          >
            Password:
          </Text>
          <Input
            type="password"
            bgColor={"white"}
            defaultValue={""}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </HStack>

        <HStack>
          <Text
            w={"200px"}
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            color={"white"}
          ></Text>
          <Button
            onClick={handle_login}
            w={"150px"}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
          >
            Login
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}
