import React, { useEffect, useState, useRef } from "react";
import {
  Center,
  VStack,
  HStack,
  Text,
  IconButton,
  Box,
} from "@chakra-ui/react";


import Doctor_Search from "./doctor_search";
import SpinnerOverlay from "../common/SpinnerOverlay";
import ListCount from "../common/ListCount"
import SideBar from "../common/SideBar";
import Doctor_Row from "./Doctor_Row"

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

  const count_Doctor = fetchData.length;

  return (
    <HStack borderWidth={"0px"} h="100vh" w="100%" spacing={0} overflow={"true"}>
      <SpinnerOverlay fetchData={fetchData} setFetchData={setFetchData} />
      <SideBar />
      <VStack width={"100%"} height="100vh" borderWidth={0} p={"10px"} spacing={3}>
        <HStack borderWidth={"0px"} direction="row" w="100%" spacing={5}>
          <Box w={"400px"}>
            <Text fontSize={30}>Doctor Info</Text>
          </Box>
          <ListCount count={count_Doctor} />
          <Doctor_Search
            setSearchMspNo={setSearchMspNo}
            setSearchFName={setSearchFName}
            setSearchLName={setSearchLName}
            setSearchPhone={setSearchPhone}
          />
        </HStack>

        <VStack
          borderWidth={"0px"}
          //direction="row"
          align="stretch"
          w="full"
          h="100vh"
          overflowY={"auto"}
        >
          <Doctor_Row doctors={doctors} />
        </VStack>
      </VStack>
    </HStack>
  );
}


