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

import Doctor_Search from "./doctor_search";

export default function Index_DoctorInfo() {
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
  };

  useEffect(() => {
    // fetch data

    dataFetch();
  }, []);

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

  return (
    <Center
      borderWidth={"7px"}
      h="100vh"
      w="100%"
      p="10px"
      alignItems={"flex-start"}
    >
      <VStack borderWidth={"0px"} h="100%" w="100%" spacing={3}>
        <HStack borderWidth={"0px"} direction="row">
          <Doctor_Search
            setSearchMspNo={setSearchMspNo}
            setSearchFName={setSearchFName}
            setSearchLName={setSearchLName}
            setSearchPhone={setSearchPhone}
          />
        </HStack>

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
            Total Record(s):{doctors.length}
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
        </VStack>
      </VStack>
    </Center>
  );
}
