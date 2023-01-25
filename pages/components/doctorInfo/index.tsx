import React, { useEffect, useState, useRef } from "react";
import { Center, VStack, HStack, Text, IconButton } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Doctor_Search from "./doctor_search";
import SpinnerOverlay from "../common/SpinnerOverlay";

export default function Index_DoctorInfo() {
  const [searchMspNo, setSearchMspNo] = useState("");
  const [searchFName, setSearchFName] = useState("");
  const [searchLName, setSearchLName] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  const [fetchData, setFetchData] = useState([]);

  const dataFetch = async () => {
    setFetchData([]);
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
      <SpinnerOverlay fetchData={fetchData} setFetchData={setFetchData} />

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
            fontSize="lg"
          >
            Total Record(s):{doctors.length}
          </Text>
          {doctors &&
            doctors.map((doctor, index) => {
              return (
                <>
                  <HStack
                    key={index}
                    spacing={3}
                    padding={"3px"}
                    _hover={{
                      background: "gray.100",
                      color: "black",
                    }}
                  >
                    <Text w={"60px"}>{doctor.mspNumber}</Text>
                    <Text w={"150px"}>{doctor.firstName}</Text>
                    <Text w={"150px"}>{doctor.lastName}</Text>
                    <Text w={"150px"}>{doctor.phone}</Text>
                    <Text w={"50px"}>{doctor.addressLine2}</Text>
                    <Text w={"200px"}>{doctor.addressLine1}</Text>
                    <Text w={"150px"}>{doctor.city}</Text>
                    <Text w={"150px"}>{doctor.province}</Text>
                    <Text w={"150px"}>{doctor.postalCode}</Text>
                    <Text w={"150px"}>{doctor.status}</Text>
                    <IconButton
                      color="gray.100"
                      borderWidth={0}
                      variant="outline"
                      aria-label="edit doctor info"
                      fontSize="20px"
                      icon={<ExternalLinkIcon />}
                      _hover={{
                        background: "gray.100",
                        color: "black",
                      }}
                    />
                  </HStack>
                </>
              );
            })}
        </VStack>
      </VStack>
    </Center>
  );
}
