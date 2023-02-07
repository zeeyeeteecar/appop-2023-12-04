import React, { useEffect, useState, useRef } from "react";
import {
  Center,
  Flex,
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

import DonationList from "./DonationFind";
import SpinnerOverlay from "../common/SpinnerOverlay";

import SideBar from "../common/SideBar";
import ListCount from "../common/ListCount"

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
  const [searchPermitType_Permanent, setSearchPermitType_Permanent] =
    useState("PERMANENT");
  const [searchPermitType_Temporary, setSearchPermitType_Temporary] =
    useState("TEMPORARY");
  const [searchRequestType_New, setSearchRequestType_New] = useState("NEW");
  const [searchRequestType_RENEWAL, setSearchRequestType_RENEWAL] =
    useState("RENEWAL");

  const [searchRequestType_REPLACEMENT, setSearchRequestType_REPLACEMENT] =
    useState("REPLACEMENT");

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
      searchUserNo: searchUserNo,
      searchUserFName: searchUserFName,
      searchUserLName: searchUserLName,
      searchDateStart: searchDateStart,
      searchDateEnd: searchDateEnd,
      searchProcessing: searchProcessing,
      searchCompleted: searchCompleted,
      searchDonationOnly: searchDonationOnly,
      searchPermitType_Permanent: searchPermitType_Permanent,
      searchPermitType_Temporary: searchPermitType_Temporary,
      searchRequestType_New: searchRequestType_New,
      searchRequestType_RENEWAL: searchRequestType_RENEWAL,
      searchRequestType_REPLACEMENT: searchRequestType_REPLACEMENT,
    };
    console.log("body: ", body);

    const data = await (
      await fetch("/api/donationTaxReceipt/donationTaxReceipt_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();

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
  function handle_onChange_Permanent(e) {
    if (e.target.checked) {
      //alert(e.target.value)
      setSearchPermitType_Permanent("PERMANENT");
    } else {
      setSearchPermitType_Permanent(null);
    }
  }

  function handle_onChange_Temporary(e) {
    if (e.target.checked) {
      //alert(e.target.value)
      setSearchPermitType_Temporary("TEMPORARY");
    } else {
      setSearchPermitType_Temporary(null);
    }
  }

  function handle_onChange_NewApplication(e) {
    if (e.target.checked) {
      //alert(e.target.value)
      setSearchRequestType_New("NEW");
    } else {
      setSearchRequestType_New(null);
    }
  }

  function handle_onChange_RenewalApplication(e) {
    if (e.target.checked) {
      //alert(e.target.value)
      setSearchRequestType_RENEWAL("RENEWAL");
    } else {
      setSearchRequestType_RENEWAL(null);
    }
  }
  function handle_onChange_ReplacementApplication(e) {
    if (e.target.checked) {
      //alert(e.target.value)
      setSearchRequestType_REPLACEMENT("REPLACEMENT");
    } else {
      setSearchRequestType_REPLACEMENT(null);
    }
  }

  useEffect(() => {
    //ataFetch();
  }, []);

  return (
    <HStack borderWidth={"0px"} h="full" w="100%" spacing={0} overflow={"true"}>
      <SideBar />
      <VStack borderWidth={"0px"} w={"100%"} h="100vh">
        <HStack borderWidth={"0px"} w="full">
          <Flex borderWidth={"0px"} w="200px" h={"full"}>
            <ListCount count={fetchData.length} />
          </Flex>

          <VStack borderWidth={"0px"} w={"1200px"} p="10px">
            <HStack spacing={5} borderWidth={"0px"}>
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
                placeholder="User #"
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
              <Box>
                <Button type="submit" w={"150px"} onClick={dataFetch}>
                  Search
                </Button>
              </Box>
              <ExportCSV fetchData={fetchData} />
            </HStack>

            <HStack spacing={6}>
              <Checkbox
                p={1}
                size="lg"
                colorScheme="blue"
                defaultChecked
                value={"IN_PROGRESS"}
                onChange={handle_onChange_Processing}
              >
                In Processing
              </Checkbox>
              <Checkbox
                p={1}
                size="lg"
                colorScheme="red"
                defaultChecked
                value={"COMPLETED"}
                onChange={handle_onChange_Completed}
              >
                Completed
              </Checkbox>
              <Checkbox
                p={1}
                size="lg"
                colorScheme="green"
                onChange={handle_onChange_DonationOnly}
              >
                Donation Only
              </Checkbox>
              <HStack
                borderWidth={0}
                p={2}
                bgColor="gray.100"
                margin={"20"}
                spacing={6}
              >
                <Checkbox
                  defaultChecked
                  size="lg"
                  colorScheme="pink"
                  onChange={handle_onChange_Permanent}
                >
                  Permanent
                </Checkbox>
                <Checkbox
                  defaultChecked
                  size="lg"
                  colorScheme="orange"
                  onChange={handle_onChange_Temporary}
                >
                  Temporary
                </Checkbox>
              </HStack>
              <HStack borderWidth={0} p={2} bgColor="gray.100" spacing={6}>
                <Checkbox
                  defaultChecked
                  size="lg"
                  colorScheme="cyan"
                  onChange={handle_onChange_NewApplication}
                >
                  New
                </Checkbox>
                <Checkbox
                  defaultChecked
                  size="lg"
                  colorScheme="purple"
                  onChange={handle_onChange_RenewalApplication}
                >
                  Renewal
                </Checkbox>
                <Checkbox
                  defaultChecked
                  size="lg"
                  colorScheme="messenger"
                  onChange={handle_onChange_ReplacementApplication}
                >
                  Replacement
                </Checkbox>
              </HStack>
            </HStack>
          </VStack>
        </HStack>

        <DonationList fetchData={fetchData} />
      </VStack>
    </HStack>
  );
}

