import React, { useEffect, useState, useRef } from "react";
import {
  Center,
  VStack,
  HStack,
  Text,
  Input,
  Button,
  Box,
  IconButton,
  Flex,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Index_DoctorInfo() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [fetchData, setFetchData] = useState([]);
  const dataFetch = async () => {
    const body = {};

    const data = await (
      await fetch("/api/doctorInfo/doctorInfo_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();

    // set state when the data received
    setFetchData(data);
  };

  useEffect(() => {
    // fetch data

    dataFetch();
  }, []);

  const handle_search = async (e) => {
    const body = {
      mspNo: e.mspNo,
      fName: e.fName,
      lName: e.lName,
      phone: e.phone,
    };

    const data = await (
      await fetch("/api/doctorInfo/doctorInfo_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    setFetchData(data);

    console.log(body);
  };

  // console.log(fetchData);

  return (
    <Center
      borderWidth={"7px"}
      h="100vh"
      w="100%"
      p="10px"
      alignItems={"flex-start"}
    >
      <VStack borderWidth={"0px"} h="100%" w="100%" spacing={3}>
        <form onSubmit={handleSubmit(handle_search)}>
          <HStack borderWidth={"0px"} direction="row">
            <Input placeholder="MSP #" {...register("mspNo")} />
            <Input placeholder="F Name" {...register("fName")} />
            <Input placeholder="L Name" {...register("lName")} />
            <Input placeholder="phone" {...register("phone")} />
            <Box><Button type="submit" w={"200px"}>Search Dr Info</Button></Box>
          </HStack>
        </form>
        <VStack
          borderWidth={"0px"}
          direction="row"
          align="stretch"
          w="100%"
          overflow={"auto"}
        >
          {fetchData &&
            fetchData.map((doctor, index) => {
              return (
                <>
                  <HStack key={index}
                    _hover={{
                      background: "gray.100",
                      color: "black",
                    }}
                  >
                    <Text w={"60px"}>{doctor.mspNumber}</Text>
                    <Text w={"150px"}>{doctor.firstName}</Text>
                    <Text w={"150px"}>{doctor.lastName}</Text>
                    <Text w={"150px"}>{doctor.phone}</Text>
                    <Text w={"200px"}>{doctor.addressLine1}</Text>
                    <Text w={"150px"}>{doctor.city}</Text>
                    <Text w={"150px"}>{doctor.province}</Text>
                    <Text w={"150px"}>{doctor.postalCode}</Text>
                    <Text w={"150px"}>{doctor.status}</Text>
                  </HStack>
                </>
              );
            })}
        </VStack>
      </VStack>
    </Center>
  );
}
