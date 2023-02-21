import React from "react";
import {
  Center,
  VStack,
  HStack,
  Text,
  Input,
  Box,
  Flex,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@chakra-ui/react";

export default function OverLay_ApplicationDetail_New(props) {
  // {
  //   application,
  //   applicationContent,
  // }
  const { application,applicant, permit, applicationContent } = props;

  const applicationJSON = JSON.stringify(application);
  // const applicationJSON_array =
  //   applicationJSON && applicationJSON.replace(/{|}|"/g, ``).split(",");

  // const applicationItem = (
  //   applicationJSON_array: string[],
  //   itemTitle: string
  // ) => {
  //   return applicationJSON_array && applicationJSON_array.map((x, key) => {
  //     const itemName = x.split(":")[0];
  //     const itemValue = x.split(":")[1];

  //     if (itemTitle === itemName) {
  //       return itemValue;
  //     }
  //   });
  // };

  // const application_1 = application && application;
  // const newApplication = application && application.newApplication;

  return (
    <VStack maxW="1000px" borderWidth={1}>
      <Box>--</Box>

      <HStack textAlign={"left"} w="100%">
        <VStack borderWidth={3} w="400px" textAlign={"left"} p={0}>
          <VStack w="100%" borderBottomWidth={1} p={3}>
            <Box w="100%" borderWidth={0} textAlign={"left"} fontWeight="bold">
              {application && application.firstName}{" "}
              {application && application.lastName}
            </Box>
            <HStack w="100%">
              <Text fontWeight={"light"}> User ID:</Text>
              <Text> {application && application.applicantId}</Text>
            </HStack>
            <HStack w="100%">
              <Text fontWeight={"light"}> Most recent APP #:</Text>
              <Text> {permit && permit.rcdPermitId} </Text>
              <Text
                rounded={"full"}
                color={"green"}
                bgColor="green.100"
                w={"100px"}
                h={"20px"}
                fontSize={12}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {permit && permit.active ? "ACTIVE" : "Inactive"}
              </Text>
            </HStack>
            <HStack w="100%">
              <Text fontWeight={"light"}>expiryDate: </Text>
              <Text>{permit && permit.expiryDate}</Text>
            </HStack>
          </VStack>

          <VStack w="100%" borderWidth={0}>
            <HStack w={"100%"}>
              <Text fontWeight={"bold"}> Personal Information</Text>
            </HStack>

            <HStack>
              <Text fontWeight={"bold"}>DoB: </Text>
              <Text>
                {applicant && applicant.dateOfBirth}
              </Text>
            </HStack>
          </VStack>

          <Box w="full" height="500px" overflowY={"auto"} borderWidth={2}>
            {applicationContent &&
              Object.getOwnPropertyNames(applicationContent).map((item) => {
                return (
                  <>
                    <Text>{item + "==" + applicationContent[item]}</Text>
                  </>
                );
              })}
          </Box>
        </VStack>
        <VStack borderWidth={3} w="400px" height={"500px"} overflowX="auto">
          <Text w={"100%"}>{applicationJSON}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
