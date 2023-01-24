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

  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const handle_login = () => {
    const envUserName: string = process.env.REACT_APP_USER_NAME;
    const envPassword: string = process.env.REACT_APP_USER_PASSWORD;

    console.log("envUserName", envUserName);
    console.log("envPassword", envPassword);
    console.log(
      "envUserName === userName ",
      envUserName === userName,
      envUserName,
      userName
    );
    console.log("envPassword === userPassword ", envPassword === userPassword,envPassword , userPassword);

    if (envUserName === userName && envPassword === userPassword) {
      console.log("okok");
      router.push("/MainMenu");
    } else {
      console.log("fail");
    }
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
            w={"100px"}
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            color={"white"}
          >
            Username:
          </Text>
          <Input
            borderWidth={0}
            color="white"
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            w={"200px"}
            bgColor={"whiteAlpha.400"}
            defaultValue={""}
            onChange={(e) => setUserName(e.target.value)}
          />
        </HStack>

        <HStack>
          <Text
            w={"100px"}
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            color={"white"}
          >
            Password:
          </Text>
          <Input
            type="password"
            borderWidth={0}
            color="white"
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            w={"200px"}
            bgColor={"whiteAlpha.400"}
            defaultValue={""}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </HStack>

        <HStack>
          <Text
            w={"100px"}
            fontSize="lg"
            fontFamily={"sans-serif"}
            fontWeight="bold"
            color={"white"}
          ></Text>
          <Button
            w={"200px"}
            onClick={handle_login}
            bg={"whiteAlpha.600"}
            color={"white"}
            _hover={{
              bg: "whiteAlpha.800",
              color: "black",
            }}
          >
            Login
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
}
