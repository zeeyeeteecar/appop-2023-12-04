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

  const [searchMspNo, setSearchMspNo] = useState("");
  const [searchFName, setSearchFName] = useState("");
  const [searchLName, setSearchLName] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  const [fetchData, setFetchData] = useState([]);
  const [fetchDataCount, setFetchDataCount] = useState<number>();

  const dataFetch = async () => {
    const body = {
      mspNo: searchMspNo,
      fName: searchFName,
      lName: searchLName,
      phone: searchPhone,
    };

    const data = await (
      await fetch("/api/doctorInfo/doctorInfo_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    setFetchData(data);

    //console.log(body);
  };

  useEffect(() => {
    // fetch data

    dataFetch();
  }, []);

  const handle_search = async (event) => {
    dataFetch();
  };

  // console.log(fetchData);

  const handle_onChange_LName = (event) => {
    setSearchLName(event.target.value);
  };
  const handle_onChange_Phone = (event) => {
    setSearchPhone(event.target.value);
  };

  const doctors = fetchData.filter((item) => {
    return searchMspNo.toLowerCase() === "" &&
      searchFName.toLowerCase() === "" &&
      searchLName.toLowerCase() === "" &&
      searchPhone.toLowerCase() === ""
      ? item
      : item.mspNumber.toLowerCase().includes(searchMspNo) &&
          item.firstName.toLowerCase().includes(searchFName) &&
          item.lastName.toLowerCase().includes(searchLName) &&
          item.phone.toLowerCase().includes(searchPhone);
  });

  const drCount = () => {
    return doctors.length;
  };

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
            <Input
              placeholder="MSP #"
              {...register("mspNo")}
              onChange={(e) => setSearchMspNo(e.target.value)}
            />
            <Input
              placeholder="F Name"
              {...register("fName")}
              onChange={(e) => setSearchFName(e.target.value)}
            />
            <Input
              placeholder="L Name"
              {...register("lName")}
              onChange={(e) => setSearchLName(e.target.value)}
            />
            <Input
              placeholder="phone"
              {...register("phone")}
              onChange={(e) => setSearchPhone(e.target.value)}
            />
            {/* <Input placeholder="MSP #" {...register("mspNo")}   />
            <Input placeholder="F Name" {...register("fName")}   />
            <Input placeholder="L Name" {...register("lName")}   />
            <Input placeholder="phone" {...register("phone")}  /> */}
            <Box>
              <Button type="submit" w={"200px"} hidden={true}>
                Search Dr Info
              </Button>
            </Box>
          </HStack>
        </form>
        <VStack
          borderWidth={"0px"}
          direction="row"
          align="stretch"
          w="100%"
          overflow={"auto"}
        >
          <Text
            color="red.300"
            bgColor={"yellow.100"}
            w="200px"
            alignContent="center"
            align={"center"}
          >
            Total Record(s):{drCount()}
          </Text>
          {doctors &&
            doctors.map((doctor, index) => {
              return (
                <>
                  <HStack
                    key={index}
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
          <h1>{}</h1>
        </VStack>
      </VStack>
    </Center>
  );
}
