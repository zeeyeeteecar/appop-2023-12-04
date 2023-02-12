import React from "react";
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
import GeneratePPTaxReceipt from "./GeneratePPTaxReceipt";
import { ArrowUpDownIcon } from "@chakra-ui/icons";
import OverLay_ApplicationDetail from "./OverLay_ApplicationDetail";

export default function DonationList({ fetchData, setFetchData, handle_sort }) {
  

  let sum_fee: number = 0;
  let sum_donation: number = 0;
  let sum_total: number = 0;

  fetchData &&
    fetchData.map((application, index) => {
      sum_fee += parseFloat(application.processingFee);
      sum_donation += parseFloat(application.donationAmount);
    });
  sum_total = sum_fee + sum_donation;

  const rowTitle = [
    { title: "Status", fieldName: "applicationProcessing.status", w: "70px" },
    { title: "Type", fieldName: "type", w: "70px" },
    { title: "PP#", fieldName: "permit.rcdPermitId", w: "80px" },
    { title: "User #", fieldName: "id", w: "80px" },
    { title: "F Name", fieldName: "firstName", w: "150px" },
    { title: "L Name", fieldName: "lastName", w: "110px" },
    { title: "phone", fieldName: "phone", w: "120px" },
    { title: "address", fieldName: "addressLine1", w: "220px" },
    { title: "city", fieldName: "city", w: "100px" },
    { title: "prov", fieldName: "province", w: "50px" },
    { title: "postal", fieldName: "postalCode", w: "80px" },
  ];

  return (
    <>
      <VStack borderWidth={"0px"} direction="row" align="stretch" w="100%">
        <HStack
          spacing={2}
          borderWidth={0}
          h="40px"
          borderBottomWidth={1}
          bgColor="green.50"
          color={"green"}
        >
          {rowTitle.map((item, key) => {
            return (
              <>
                <HStack w={item.w} spacing={1} borderWidth={0}>
                  <Box borderWidth={0}>
                    <ArrowUpDownIcon
                      id={item.fieldName}
                      color={"gray.300"}
                      w="12px"
                      onClick={(e) => handle_sort(e)}
                      _hover={{
                        background: "gray.50",
                        color: "black",
                        cursor: "pointer",
                      }}
                    />
                  </Box>
                  <Text borderWidth={0} fontWeight={"semibold"} align="center">
                    {item.title}
                  </Text>
                </HStack>
              </>
            );
          })}

          <HStack spacing={0}>
            <Text
              w={"40px"}
              borderWidth={0}
              fontWeight={"semibold"}
              align="center"
            >
              Fee
            </Text>
            <Text w={"50px"} borderWidth={0} color="red.500">
              {sum_fee}
            </Text>
          </HStack>

          <HStack spacing={0}>
            <Text w={"50px"} borderWidth={0} fontWeight={"semibold"}>
              Dona
            </Text>
            <Text w={"50px"} borderWidth={0} color="red.500">
              {sum_donation}
            </Text>
          </HStack>

          <HStack spacing={0}>
            <Text w={"50px"} borderWidth={0} fontWeight={"semibold"}>
              Total
            </Text>
            <Text w={"50px"} borderWidth={0} color="red.500">
              {sum_total}
            </Text>
          </HStack>

          <Box w={"70px"}></Box>
        </HStack>
      </VStack>
      <VStack
        borderWidth={"0px"}
        direction="row"
        align="stretch"
        w="100%"
        h="full"
        overflowY={"auto"}
      >
        {fetchData &&
          fetchData.map((application, index) => {
            const clr_donationAmount =
              application.donationAmount == 0 ? "gray.200" : "black";
            const permitType_bgclr_clr = (permitType) => {
              const bgclr_clr = { bgclr: "", clr: "" };

              if (permitType === "PERMANENT") {
                bgclr_clr.bgclr = "red.50";
                bgclr_clr.clr = "magenta";
              }

              if (permitType === "TEMPORARY") {
                bgclr_clr.bgclr = "orange.50";
                bgclr_clr.clr = "orange";
              }
              return bgclr_clr;
            };



            const bgclr_Status = (AppStatus) => {
              const bgclr_clr = [
                { category: "COMPLETED", clr: "blue", bgclr: "blue.100" },
                { category: "IN_PROGRESS", clr: "red", bgclr: "red.100" },
              ];

              return bgclr_clr.find((e) => e.category === AppStatus);
            };

            const type_bgclr_clr = (Apptype: string): any => {
              let bgclr_clr: {
                category: string;
                clr: string;
                bgclr: string;
              }[] = [
                { category: "NEW", clr: "green", bgclr: "green.100" },
                { category: "RENEWAL", clr: "purple", bgclr: "purple.100" },
                { category: "REPLACEMENT", clr: "blue", bgclr: "blue.100" },
              ];
              return bgclr_clr.find((e) => e.category === Apptype);
            };

            const phone =
              application.phone.substring(0, 3) +
              "-" +
              application.phone.substring(3, 6) +
              "-" +
              application.phone.substring(6);

            return (
              <HStack
                key={index}
                h="50px"
                spacing={2}
                color="gray.500"
                //bgColor="magenta.100"
                _hover={{
                  background: "gray.50",
                  color: "black",
                  shadow: "md",
                  cursor: "pointer",
                }}
              >
                <Text
                  rounded={"full"}
                  fontSize="12px"
                  fontWeight={"semibold"}
                  p="1px"
                  w={"70px"}
                  borderWidth={0}
                  align={"center"}
                  bgColor={
                    bgclr_Status(application.applicationProcessing.status).bgclr
                  }
                  color={
                    bgclr_Status(application.applicationProcessing.status).clr
                  }
                >
                  {application.applicationProcessing.status.substring(0, 5)}
                </Text>
                <OverLay_ApplicationDetail application={application} applicationType={application.type} type_bgclr = {type_bgclr_clr(application.type)["bgclr"]} type_clr={type_bgclr_clr(application.type)["clr"]}/>
                <Text
                  rounded={"full"}
                  fontSize="14px"
                  fontWeight={"semibold"}
                  p="1px"
                  w={"80px"}
                  borderWidth={0}
                  bgColor={permitType_bgclr_clr(application.permitType).bgclr}
                  color={permitType_bgclr_clr(application.permitType).clr}
                  align={"center"}
                >
                  {application.permitType.substring(0, 1) +
                    " " +
                    (application.permit ? application.permit.rcdPermitId : "")}
                </Text>

                <Text w={"80px"} borderWidth={0} align="center">
                  {application.applicantId}
                </Text>
                <Text w={"150px"} borderWidth={0}>
                  {application.firstName}
                </Text>
                <Text w={"110px"} borderWidth={0}>
                  {application.lastName}
                </Text>
                <Text w={"120px"} borderWidth={0}>
                  {phone}
                </Text>
                <Text w={"220px"} borderWidth={0}>
                  {application.addressLine1}
                </Text>
                <Text w={"100px"} borderWidth={0}>
                  {application.city}
                </Text>
                <Text w={"50px"} borderWidth={0} align="center">
                  {application.province}
                </Text>
                <Text w={"80px"} borderWidth={0} align="center">
                  {application.postalCode}
                </Text>
                <Text
                  w={"90px"}
                  borderWidth={0}
                  align="end"
                  paddingEnd={"30px"}
                >
                  {application.processingFee}
                </Text>
                <Text
                  w={"100px"}
                  borderWidth={0}
                  color={clr_donationAmount}
                  align="end"
                  paddingEnd={"30px"}
                >
                  {application.donationAmount}
                </Text>
                <Text
                  w={"100px"}
                  borderWidth={0}
                  align="end"
                  paddingEnd={"30px"}
                >
                  {parseFloat(application.processingFee) +
                    parseFloat(application.donationAmount)}
                </Text>
                <Box w={"100px"} h="40px">
                  <GeneratePPTaxReceipt
                    application={application}
                    donationAmount={application.donationAmount}
                  />
                </Box>
              </HStack>
            );
          })}
      </VStack>
    </>
  );
}
