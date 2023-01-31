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

import { SingleDatepicker, RangeDatepicker } from "chakra-dayzed-datepicker";
import ExportCSV from "./ExportCSV";

import GeneratePPTaxReceipt from "./GeneratePPTaxReceipt";

export default function Index_applicationInfo() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const nextMonthDay1: string = "01";
  const nextMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();

  const [searchUserNo, setSearchUserNo] = useState("");
  const [searchUserFName, setSearchUserFName] = useState("");
  const [searchUserLName, setSearchUserLName] = useState("");
  const [searchProcessing, setSearchProcessing] = useState("IN_PROGRESS");
  const [searchCompleted, setSearchCompleted] = useState("COMPLETED");
  const [searchDonationOnly, setSearchDonationOnly] = useState<boolean>(false);

  const [searchDateStart, setSearchDateStart] = useState(
    new Date(currentYear + "-" + currentMonth + "-" + nextMonthDay1)
  );
  const [searchDateEnd, setSearchDateEnd] = useState(
    new Date(currentYear + "-" + currentMonth + "-" + nextMonthLastDay)
  );

  const [sumDonation, setSumDonation] = useState(0);
  const [sumFee, setSumFee] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);

  const [fetchData, setFetchData] = useState([]);

  const dataFetch = async () => {
    setFetchData([]);
    const body = {
      searchUserNo: searchUserNo,
      searchUserFName: searchUserFName,
      searchUserLName: searchUserLName,
      searchDateStart: searchDateStart,
      searchDateEnd: searchDateEnd,
      searchProcessing: searchProcessing,
      searchCompleted: searchCompleted,
      searchDonationOnly: searchDonationOnly,
    };
    //console.log("body: ", body);

    const data = await (
      await fetch("/api/donationTaxReceipt/donationTaxReceipt_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();

    let sum_Fee = data.reduce((acc, obj) => {
      return acc + parseFloat(obj.processingFee);
    }, 0);
    setSumFee(sum_Fee);

    let sum_donation = data.reduce((acc, obj) => {
      return acc + parseFloat(obj.donationAmount);
    }, 0);
    setSumDonation(sum_donation);

    let sum_total = data.reduce((acc, obj) => {
      return (
        acc + parseFloat(obj.processingFee) + parseFloat(obj.donationAmount)
      );
    }, 0);
    setSumTotal(sum_total);

    setFetchData(data);
  };

  //console.log(fetchData);

  function handle_onChange_Processing(e) {
    if (e.target.checked) {
      //alert(e.target.value)
      setSearchProcessing("IN_PROGRESS");
    } else setSearchProcessing("");
  }

  function handle_onChange_Completed(e) {
    if (e.target.checked) {
      //alert(e.target.value)
      setSearchCompleted("COMPLETED");
    } else {
      setSearchCompleted("");
    }
  }

  function handle_onChange_DonationOnly(e) {
    if (e.target.checked) {
      //alert(e.target.value)
      setSearchDonationOnly(true);
    } else {
      setSearchDonationOnly(false);
    }
  }

  useEffect(() => {
    //ataFetch();
  }, []);

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

      <VStack borderWidth={"0px"} h="100%" w="100%" spacing={0}>
        <HStack borderWidth={"0px"} direction="row" w={"100%"} spacing={5}>
          <Box w={"130px"} borderWidth={"0px"}>
            <SingleDatepicker
              name="date-start"
              date={searchDateStart}
              onDateChange={setSearchDateStart}
            />
          </Box>
          <Box w={"130px"} borderWidth={"0px"}>
            <SingleDatepicker
              name="date-end"
              date={searchDateEnd}
              onDateChange={setSearchDateEnd}
            />
          </Box>
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
          <Checkbox
            size="lg"
            colorScheme="blue"
            defaultChecked
            value={"IN_PROGRESS"}
            onChange={handle_onChange_Processing}
          >
            In Processing
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="red"
            defaultChecked
            value={"COMPLETED"}
            onChange={handle_onChange_Completed}
          >
            Completed
          </Checkbox>
          <Checkbox
            size="lg"
            colorScheme="green"
            onChange={handle_onChange_DonationOnly}
          >
            Donation Only
          </Checkbox>
          <Box>
            <Button type="submit" w={"150px"} onClick={dataFetch}>
              Search
            </Button>
          </Box>
          <ExportCSV fetchData={fetchData} />
        </HStack>
        <HStack borderWidth={0} width={"100%"} spacing={5}>
          <HStack>
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
        </HStack>

        <VStack borderWidth={"0px"} direction="row" align="stretch" w="100%">
          <HStack spacing={0}>
            <Text w={"110px"} borderWidth={0} fontWeight={"bold"}>
              Status
            </Text>
            <Text w={"150px"} borderWidth={0} fontWeight={"bold"}>
              User #
            </Text>
            <Text w={"150px"} borderWidth={0} fontWeight={"bold"}>
              FName
            </Text>
            <Text w={"150px"} borderWidth={0} fontWeight={"bold"}>
              LName
            </Text>
            <Text w={"150px"} borderWidth={0} fontWeight={"bold"}>
              phone
            </Text>
            <Text w={"150px"} borderWidth={0} fontWeight={"bold"}>
              address
            </Text>
            <Text w={"150px"} borderWidth={0} fontWeight={"bold"}>
              city
            </Text>
            <Text w={"150px"} borderWidth={0} fontWeight={"bold"}>
              province
            </Text>
            <Text w={"150px"} borderWidth={0} fontWeight={"bold"}>
              postal
            </Text>
            <Text w={"100px"} borderWidth={0} fontWeight={"bold"}>
              Fee - {sumFee}
            </Text>

            <Text w={"100px"} borderWidth={0} fontWeight={"bold"}>
              Dona - {sumDonation}
            </Text>

            <Text w={"100px"} borderWidth={0} fontWeight={"bold"}>
              Total - {sumTotal}
            </Text>
            <Box w={"70px"}></Box>
          </HStack>
        </VStack>
        <VStack
          borderWidth={"0px"}
          direction="row"
          align="stretch"
          w="100%"
          overflowY={"auto"}
        >
          {fetchData &&
            fetchData.map((application, index) => {

              const clr_donationAmount = application.donationAmount==0?"gray.200":"black"
              return (
                <HStack
                  key={index}
                  spacing={3}
                  _hover={{
                    background: "gray.100",
                    color: "black",
                  }}
                >
                  <Text w={"110px"} borderWidth={0}>
                    {application.applicationProcessing.status}
                  </Text>
                  <Text w={"150px"} borderWidth={0}>
                    {application.applicantId}
                  </Text>
                  <Text w={"150px"} borderWidth={0}>
                    {application.firstName}
                  </Text>
                  <Text w={"150px"} borderWidth={0}>
                    {application.lastName}
                  </Text>
                  <Text w={"150px"} borderWidth={0}>
                    {application.phone}
                  </Text>
                  <Text w={"150px"} borderWidth={0}>
                    {application.addressLine1}
                  </Text>
                  <Text w={"150px"} borderWidth={0}>
                    {application.city}
                  </Text>
                  <Text w={"150px"} borderWidth={0}>
                    {application.province}
                  </Text>
                  <Text w={"150px"} borderWidth={0}>
                    {application.postalCode}
                  </Text>
                  <Text w={"100px"} borderWidth={0}>
                    {application.processingFee}
                  </Text>
                  <Text w={"100px"} borderWidth={0} color={clr_donationAmount}>
                    {application.donationAmount}
                  </Text>
                  <Text w={"100px"} borderWidth={0}>
                    {parseFloat(application.processingFee) +
                      parseFloat(application.donationAmount)}
                  </Text>
                  <Box w={"70px"}>
                    <GeneratePPTaxReceipt application={application} />
                  </Box>
                </HStack>
              );
            })}
        </VStack>
      </VStack>
    </Center>
  );
}
