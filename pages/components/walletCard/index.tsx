import React, { useEffect, useState, useRef } from "react";
import {
  Center,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
  Flex,
  Radio,
  RadioGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { jsPDF } from "jspdf";

export default function WalletCard() {
  const [fetchData, setFetchData] = React.useState(null);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 50, 200);
    // doc.save("a4.pdf"); // will save the file in the current working directory
    console.log("tet13");
  };

  const dataFetch = async () => {
    setFetchData(null);
    const body = {};

    const data = await (
      await fetch("/api/walletCard/walletCard_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();
    setFetchData(data);
  };

  React.useEffect(() => {
    // fetch data
    dataFetch();
  }, []);

  console.log(fetchData);
  return (
    <VStack width={"100%"} height="100vh" borderWidth={0} spacing={3}>
      {fetchData &&
        fetchData.map((applicationProcessing, index) => {
          const application = applicationProcessing.application;

          return (
            <>
              <VStack key={index} w={"500px"} borderWidth={3}>
                <Flex>
                  <Text>Richmond Centre for Disability</Text>
                </Flex>
                <VStack>
                  <HStack>
                    <Text w={"200PX"}>
                      permit#:{" "}
                      {application.permit
                        ? application.permit.rcdPermitId
                        : " N/A"}
                    </Text>
                    <Text w={"200PX"}>
                      Expiry:{" "}
                      {application.permit
                        ? application.permit.expiryDate
                        : " N/A"}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text w={"200PX"}>
                      MoB: {application.firstName + " " + application.lastName}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text w={"200PX"}>
                      User #: {application.firstName + " " + application.lastName}
                    </Text>
                  </HStack>
                </VStack>

                {/* <HStack>
                  <Text>{applicationProcessing.id}</Text>
                  <Text w={"100PX"}>{applicationProcessing.status}</Text>
                  <Text w={"100PX"}>{application.firstName}</Text>
                  <Text w={"100PX"}>{application.lastName}</Text>
                </HStack>
                <HStack>
                  <Text w={"100PX"}>{application.phone}</Text>
                  <Text w={"300PX"}>{application.email}</Text>
                  <Text w={"100PX"}>{application.receiveEmailUpdates}</Text>
                </HStack>
                <HStack>
                  <Text w={"200PX"}>{application.addressLine1}</Text>
                  <Text w={"100PX"}>{application.city}</Text>
                  <Text w={"100PX"}>{application.province}</Text>
                  <Text w={"100PX"}>{application.postalCode}</Text>
                </HStack>
                <HStack>
                  <Text w={"100PX"}>{application.permitType}</Text>
                  <Text w={"100PX"}>{application.paymentMethod}</Text>
                  <Text w={"100PX"}>{application.processingFee}</Text>
                  <Text w={"100PX"}>{application.donationAmount}</Text>
                  <Text w={"100PX"}>{application.type}</Text>
                  <Text w={"100PX"}>{application.applicantId}</Text>
                </HStack> */}
              </VStack>
            </>
          );
        })}
    </VStack>
  );
}
