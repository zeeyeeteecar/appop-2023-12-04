import React, { useEffect, useState, useRef } from "react";
import {
  Center,
  VStack,
  HStack,
  Text,
  Input,
  Box,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SingleDatepicker, RangeDatepicker } from "chakra-dayzed-datepicker";

import SpinnerOverlay from "../common/SpinnerOverlay";

export default function Index_applicationInfo() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const nextMonthDay1: string = "01";
  const nextMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

  const [value, setValue] = React.useState("1");
  const [searchUserNo, setSearchUserNo] = useState("");
  const [searchUserFName, setSearchUserFName] = useState("");
  const [searchUserLName, setSearchUserLName] = useState("");
  const [searchDateStart, setSearchDateStart] = useState(
    new Date(currentYear + "-" + currentMonth + "-" + nextMonthDay1)
  );
  const [searchDateEnd, setSearchDateEnd] = useState(
    new Date(currentYear + "-" + currentMonth + "-" + nextMonthLastDay)
  );

  const [fetchData, setFetchData] = useState([]);

  const dataFetch = async () => {
    setFetchData([]);
    const body = {
      userNo: searchUserNo,
      fName: searchUserFName,
      lName: searchUserLName,
      searchDateStart: searchDateStart,
      searchDateEnd: searchDateEnd,
    };

    const data = await (
      await fetch("/api/donationTaxReceipt/donationTaxReceipt_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    setFetchData(data);
  };

  console.log(fetchData);

  // useEffect(() => {
  //   dataFetch();
  // }, []);

  // const applications = fetchData.filter((item) => {
  //   return searchMspNo.toLowerCase() === "" &&
  //     searchFName.toLowerCase() === "" &&
  //     searchLName.toLowerCase() === "" &&
  //     searchPhone.toLowerCase() === ""
  //     ? item
  //     : item.mspNumber.toLowerCase().includes(searchMspNo) &&
  //         item.firstName.toLowerCase().includes(searchFName) &&
  //         item.lastName.toLowerCase().includes(searchLName) &&
  //         item.phone.toLowerCase().includes(searchPhone);
  // });

  return (
    <Center
      borderWidth={"7px"}
      h="100vh"
      w="100%"
      p="10px"
      alignItems={"flex-start"}
    >
      {/* <SpinnerOverlay fetchData={fetchData} setFetchData={setFetchData} /> */}

      <VStack borderWidth={"0px"} h="100%" w="100%" spacing={1}>
        <HStack borderWidth={"0px"} direction="row" w={"100%"}>
          <HStack w={"150px"} borderWidth={"0px"}>
            <SingleDatepicker
              name="date-start"
              date={searchDateStart}
              onDateChange={setSearchDateStart}
            />
          </HStack>
          <HStack w={"150px"} borderWidth={"0px"}>
            <SingleDatepicker
              name="date-end"
              date={searchDateEnd}
              onDateChange={setSearchDateEnd}
            />
          </HStack>
          <Input
            w={"150px"}
            placeholder="MSP #"
            onChange={(e) => setSearchUserNo(e.target.value)}
          />
          <Input
            w={"150px"}
            placeholder="F Name"
            onChange={(e) => setSearchUserFName(e.target.value)}
          />
          <Input
            w={"150px"}
            placeholder="L Name"
            onChange={(e) => setSearchUserLName(e.target.value)}
          />
          <HStack
            spacing={[1, 5]}
            direction={["column", "row"]}
            width={"450px"}
          >
            <Checkbox size="lg" colorScheme="blue" defaultChecked>
              In Processing
            </Checkbox>
            <Checkbox size="lg" colorScheme="red" defaultChecked>
              Completed
            </Checkbox>
            <Checkbox size="lg" colorScheme="green" defaultChecked>
              Donation Only
            </Checkbox>
          </HStack>
          {/* <Input placeholder="MSP #" {...register("mspNo")}   />
    <Input placeholder="F Name" {...register("fName")}   />
    <Input placeholder="L Name" {...register("lName")}   />
    <Input placeholder="phone" {...register("phone")}  /> */}
          <Box>
            <Button type="submit" w={"150px"} onClick={dataFetch}>
              Donation List
            </Button>
          </Box>
          <Text
            color="red.300"
            bgColor={"yellow.100"}
            w="150px"
            alignContent="center"
            align={"center"}
            fontSize="16px"
          >
            Total Record(s):{fetchData.length}
          </Text>
        </HStack>

        <VStack
          borderWidth={"0px"}
          direction="row"
          align="stretch"
          w="100%"
          overflow={"auto"}
        >
          <HStack  spacing={0}> 
            <Text w={"100px"} borderWidth={1} fontWeight={"bold"}>
              proc_comp
            </Text>
            <Text w={"150px"} borderWidth={1} fontWeight={"bold"}>
              FName
            </Text>
            <Text w={"150px"} borderWidth={1} fontWeight={"bold"}>
              LName
            </Text>
            <Text w={"150px"} borderWidth={1} fontWeight={"bold"}>
              phone
            </Text>
            <Text w={"150px"} borderWidth={1} fontWeight={"bold"}>
              address
            </Text>
            <Text w={"150px"} borderWidth={1} fontWeight={"bold"}>
              city
            </Text>
            <Text w={"150px"} borderWidth={1} fontWeight={"bold"}>
              province
            </Text>
            <Text w={"150px"} borderWidth={1} fontWeight={"bold"}>
              postal
            </Text>
            <Text w={"50px"} borderWidth={1} fontWeight={"bold"}>
              Fee
            </Text>
            <Text w={"50px"} borderWidth={1} fontWeight={"bold"}>
              Donation
            </Text>
            <Text w={"50px"} borderWidth={1} fontWeight={"bold"}>
              Total
            </Text>
          </HStack>
          {fetchData &&
            fetchData.map((application, index) => {
              return (
                <HStack
                  key={index}
                  spacing={1}
                  _hover={{
                    background: "gray.100",
                    color: "black",
                  }}
                >
                  <Text w={"100px"} borderWidth={1}>
                    {application.applicationProcessing.status}
                  </Text>
                  <Text w={"150px"} borderWidth={1}>
                    {application.firstName}
                  </Text>
                  <Text w={"150px"} borderWidth={1}>
                    {application.lastName}
                  </Text>
                  <Text w={"150px"} borderWidth={1}>
                    {application.phone}
                  </Text>

                  <Text w={"150px"} borderWidth={1}>
                    {application.addressLine1}
                  </Text>
                  <Text w={"150px"} borderWidth={1}>
                    {application.city}
                  </Text>
                  <Text w={"150px"} borderWidth={1}>
                    {application.province}
                  </Text>
                  <Text w={"150px"} borderWidth={1}>
                    {application.postalCode}
                  </Text>
                  <Text w={"50px"} borderWidth={1}>
                    {application.processingFee}
                  </Text>
                  <Text w={"50px"} borderWidth={1}>
                    {application.donationAmount}
                  </Text>
                  <Text w={"50px"} borderWidth={1}>
                    {parseFloat(application.processingFee) +
                      parseFloat(application.donationAmount)}
                  </Text>

                  <IconButton
                    color="gray.100"
                    borderWidth={0}
                    variant="outline"
                    aria-label="edit application info"
                    fontSize="20px"
                    icon={<ExternalLinkIcon />}
                    _hover={{
                      background: "gray.100",
                      color: "black",
                    }}
                  />
                </HStack>
              );
            })}
        </VStack>
      </VStack>
    </Center>
  );
}
