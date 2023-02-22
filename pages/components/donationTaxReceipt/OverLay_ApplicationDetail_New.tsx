import React from "react";
import Link from "next/link";
import {
  Center,
  VStack,
  HStack,
  Text,
  Input,
  Box,
  Flex,
  Divider,
  Radio,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  MdLocationOn,
  MdImportantDevices,
  MdAccessibility,
  MdFavoriteBorder,
  MdDragIndicator,
} from "react-icons/md";
import GoogleMaps from "./GoogleMaps";

export default function OverLay_ApplicationDetail_New(props) {
  // {
  //   application,
  //   applicationContent,
  // }

  const {
    application,
    applicant,
    MedicalInformation,
    permit,
    applicationContent,
  } = props;

  const address: string =
    (application && application.addressLine1) +
    " " +
    (application && application.city) +
    " " +
    (application && application.province) +
    ", " +
    (application && application.country) +
    ", " +
    (application && application.postalCode);

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
    <VStack maxW="100%" h="600px" borderWidth={1}>
      **********************************===== First Last Name
      <Flex
        textAlign={"left"}
        w="100%"
        h={"full"}
        borderWidth={0}
        overflowX={"auto"}
        verticalAlign={"top"}
        p={0}
      >
        <VStack borderWidth={0} w="400px" p={0}>
          <Box borderWidth={0} w="100%" p={0}>
            <Box w="100%" borderWidth={0} fontWeight="bold" color={"green"}>
              {application && application.firstName}{" "}
              {application && application.lastName}
            </Box>
            <Flex w="100%" borderWidth={0} margin={0}>
              <Text fontWeight={"light"}> User ID:</Text>
              <Text> {application && application.applicantId}</Text>
            </Flex>
            <HStack w="100%" m={0} borderWidth={0}>
              <Text fontWeight={"light"}> Most recent APP #:</Text>
              <Text> {permit && permit.rcdPermitId} </Text>
              <Text
                rounded={"full"}
                color={"green"}
                bgColor="green.100"
                w={"70px"}
                h={"18px"}
                fontSize={12}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                {permit && permit.active ? "ACTIVE" : "Inactive"}
              </Text>
            </HStack>
            <HStack w="100%">
              <Text fontWeight={"light"}>expiryDate: </Text>
              <Text>
                {application && application.permit.expiryDate.substring(0, 10)}
              </Text>
            </HStack>
          </Box>
          <Center height="20px" w={"80%"}>
            <Divider />
          </Center>
          **********************************===== Personal Information
          <Box borderWidth={0} w="400px" textAlign={"left"} p={0}>
            <HStack w={"100%"} color="green">
              <MdAccessibility />
              <Text fontWeight={"bold"}> Personal Information</Text>
            </HStack>

            <HStack w="100%">
              <Text fontWeight={"light"}>DoB: </Text>
              <Text>
                {" "}
                {application &&
                  application.applicant.dateOfBirth.substring(0, 10)}
              </Text>
            </HStack>

            <HStack w="100%">
              <Text fontWeight={"light"}>Gender: </Text>
              <Text>{application && application.applicant.gender}</Text>{" "}
            </HStack>
          </Box>
          <Center height="20px" w={"80%"}>
            <Divider />
          </Center>
          **********************************===== Contact Info
          <Box borderWidth={0} w="400px" textAlign={"left"} p={0}>
            <HStack w={"100%"} borderWidth={0} color="green">
              <MdImportantDevices />
              <Text fontWeight={"bold"}>Contact Info</Text>
            </HStack>

            <Flex w="100%" borderWidth={0}>
              <Text fontWeight={"light"}>Tel: </Text>
              <Text>
                {application &&
                  application.applicant.dateOfBirth.substring(0, 10)}
              </Text>
            </Flex>

            <Box w="100%" borderWidth={0}>
              <Text fontWeight={"light"}>Renewal updates through email: </Text>
              <Text>{application && application.email}</Text>{" "}
            </Box>
          </Box>
          <Center height="20px" w={"80%"}>
            <Divider />
          </Center>
          **********************************===== Address
          <Box borderWidth={0} w="400px" textAlign={"left"} p={0}>
            <HStack w={"100%"} borderWidth={0} color="green">
              <Link
                href={"https://maps.google.com/?q=" + address}
                target={"_blank"}
              >
                <MdLocationOn color="red" />
              </Link>
              <Text fontWeight={"bold"}>Address</Text>
              <GoogleMaps />
            </HStack>

            <Box w={"100%"} textAlign={"left"}>
              <Link
                href={"https://maps.google.com/?q=" + address}
                target={"_blank"}
              >
                <Text>{application && application.addressLine1}</Text>
                <Text>
                  {application && application.city}{" "}
                  {application && application.province}{" "}
                  {application && application.country} {", "}
                  {application && application.postalCode}
                </Text>
              </Link>
            </Box>
          </Box>
        </VStack>

        {/* **************************************************************************
         ***************Doctor, disability, assessment Info
         ************************************************************************** */}

        <VStack borderWidth={0} w="400px" p={0}>
          *********************************===== Doctor Info
          <VStack borderWidth={0} w="100%" p={0}>
            <Box w={"100%"} textAlign={"left"}>
              <HStack w={"100%"} borderWidth={0} color="green">
                <MdFavoriteBorder />
                <Text fontWeight={"bold"}>Doctor Info</Text>
              </HStack>

              <Text w="180px">
                {applicationContent && applicationContent.physicianFirstName}{" "}
                {applicationContent && applicationContent.physicianLastName}
              </Text>
              <Text color={"gray.400"} fontSize="15">
                MSP #:{" "}
                {applicationContent && applicationContent.physicianMspNumber}{" "}
              </Text>

              <Text>
                Phone:{" "}
                {applicationContent &&
                  applicationContent.physicianPhone.slice(0, 3) +
                    "-" +
                    applicationContent.physicianPhone.slice(3, 6) +
                    "-" +
                    applicationContent.physicianPhone.slice(6)}{" "}
              </Text>

              <Text>
                {applicationContent && applicationContent.physicianAddressLine1}{" "}
              </Text>
              <Text>
                {applicationContent && applicationContent.physicianCity}{" "}
                {applicationContent && applicationContent.physicianProvince}{" "}
                {applicationContent && applicationContent.physicianCountry}
                {", "}
                {applicationContent && applicationContent.physicianPostalCode}
              </Text>
            </Box>
          </VStack>
          <Center height="20px" w={"80%"}>
            <Divider />
          </Center>
          *********************************===== Physician Assessment
          <VStack borderWidth={0} w="100%" p={0}>
            <Box w={"100%"} textAlign={"left"}>
              <HStack w={"100%"} borderWidth={0} color="green">
                <MdDragIndicator />
                <Text fontWeight={"bold"}>Physician Assessment</Text>
              </HStack>
              <Text>
                Disability:{" "}
                <li>
                  {application &&
                    application.applicant.medicalInformation.disability}{" "}
                </li>
              </Text>
              <Text>
                Certification Date:{" "}
                <li>
                  {application &&
                    application.applicant.medicalInformation.disabilityCertificationDate.substring(
                      0,
                      10
                    )}
                </li>
              </Text>
              <Text>
                Condition:{" "}
                {application &&
                  application.applicant.medicalInformation.patientCondition.map(
                    (item) => {
                      return (
                        <>
                          <li>{item.replace(/_/g, " ").toLowerCase()}</li>
                        </>
                      );
                    }
                  )}
              </Text>
            </Box>
          </VStack>
          {/* <Box w="full" height="500px" overflowY={"auto"} borderWidth={2}>
            {application &&
              Object.getOwnPropertyNames(application).map((item) => {
                return (
                  <>
                    <li>{item + "==" + JSON.stringify(application[item])}</li>
                  </>
                );
              })}
          </Box> */}
        </VStack>

        {/* **************************************************************************
         ***************Payment, shipping, Billing Info
         ************************************************************************** */}

        <VStack borderWidth={0} w="400px" textAlign={"left"} p={2}>
          *********************************Payment, shipping, Billing Info
          <VStack borderWidth={0} w="100%" textAlign={"left"} p={0}>
            <Box w={"100%"} textAlign={"left"}>
              <Text fontWeight={"bold"}>Fee</Text>
              <Flex>
                <Text w="200px">Permit Fee (Fixed)</Text>
                <Text>${application && application.processingFee} </Text>
              </Flex>
              <Flex>
                <Text w="200px">Donation</Text>
                <Text>${application && application.donationAmount} </Text>
              </Flex>
              <Flex>
                <Text w="200px">Paid By</Text>
                <Text>{application && application.paymentMethod} </Text>
              </Flex>

              <Center height="20px" w={"90%"}>
                <Divider />
              </Center>

              <Text fontWeight={"bold"}>Shipping Address</Text>
              <Text>
                {application &&
                application.shippingAddressSameAsHomeAddress
                  ? application.addressLine1
                  : application.shippingAddressLine1?application.shippingAddressLine1:""}
              </Text>
              <Text>
                {application && application.shippingAddressSameAsHomeAddress
                  ? application.city
                  : application.shippingCity}{" "}
                {application && application.shippingAddressSameAsHomeAddress
                  ? application.province
                  : application.shippingProvince}{" "}
                {application && application.shippingAddressSameAsHomeAddress
                  ? application.country
                  : application.shippingCountry}
                {", "}
                {application && application.shippingAddressSameAsHomeAddress
                  ? application.postalCode
                  : application.shippingPostalCode}{" "}
              </Text>

              <Center height="20px" w={"90%"}>
                <Divider />
              </Center>

              <Text fontWeight={"bold"}>Billing Address</Text>
              <Text>
                {application && application.billingAddressSameAsHomeAddress
                  ? application.addressLine1
                  : application.billingAddressLine1}
              </Text>
              <Text>
                {application && application.billingAddressSameAsHomeAddress
                  ? application.city
                  : application.billingCity}{" "}
                {application && application.billingAddressSameAsHomeAddress
                  ? application.province
                  : application.billingProvince}{" "}
                {application && application.billingAddressSameAsHomeAddress
                  ? application.country
                  : application.billingCountry}
                {", "}
                {application && application.billingAddressSameAsHomeAddress
                  ? application.postalCode
                  : application.billingPostalCode}{" "}
              </Text>

              <Center height="20px" w={"90%"}>
                <Divider />
              </Center>

              <Text fontWeight={"bold"}>PP History</Text>
              <Text>
                {application &&
                  application.applicant.permits.map((item) => {
                    return (
                      <>
                        <Flex>
                          <Box w="100px"># {item.rcdPermitId}</Box>
                          <Box
                            textAlign={"center"}
                            w="100px"
                            rounded={"full"}
                            bgColor="yellow.200"
                          >
                            {item.expiryDate.substring(0, 10)}
                          </Box>
                          <Box
                            marginLeft={"20px"}
                            rounded={"full"}
                            color={"green"}
                            bgColor="green.100"
                            w={"100px"}
                            textAlign={"center"}
                          >
                            {permit && permit.active ? "Active" : "Inactive"}
                          </Box>
                        </Flex>
                      </>
                    );
                  })}
              </Text>
            </Box>
          </VStack>
          {/* <Box w="full" height="500px" overflowY={"auto"} borderWidth={2}>
            {application &&
              Object.getOwnPropertyNames(application).map((item) => {
                return (
                  <>
                    <li>{item + "==" + JSON.stringify(application[item])}</li>
                  </>
                );
              })}
          </Box> */}
        </VStack>

        <VStack
          hidden
          borderWidth={3}
          w="500px"
          height={"500px"}
          overflowX="auto"
        >
          <Text w={"100%"}>{applicationJSON}</Text>
        </VStack>
      </Flex>
    </VStack>
  );
}
