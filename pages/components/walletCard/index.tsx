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
    <VStack width={"100%"} height="100vh" borderWidth={4} spacing={3}>
      {fetchData &&
        fetchData.map((applicationProcessing, index) => {
          const application = applicationProcessing.application;

          return (
            <>
              <VStack key={index}>
                <HStack>
                  <Text>{applicationProcessing.id}</Text>
                  <Text w={"100PX"}>{applicationProcessing.status}</Text>
                  <Text w={"100PX"}>
                    {application ? application.firstName : ""}
                  </Text>
                  <Text w={"100PX"}>
                    {application ? application.lastName : ""}
                  </Text>
                  <Text w={"100PX"}>
                    {application ? application.phone : ""}
                  </Text>
                  <Text w={"300PX"}>
                    {application ? application.email : ""}
                  </Text>
                  <Text w={"100PX"}>
                    {application ? application.receiveEmailUpdates : ""}
                  </Text>
                </HStack>
                <HStack>
                  <Text w={"200PX"}>
                    {application ? application.addressLine1 : ""}
                  </Text>
                  <Text w={"100PX"}>{application ? application.city : ""}</Text>
                  <Text w={"100PX"}>
                    {application ? application.province : ""}
                  </Text>
                  <Text w={"100PX"}>
                    {application ? application.postalCode : ""}
                  </Text>
                </HStack>
                <HStack>
                  <Text w={"100PX"}>
                    {application ? application.permitType : ""}
                  </Text>
                  <Text w={"100PX"}>
                    {application ? application.paymentMethod : ""}
                  </Text>
                  <Text w={"100PX"}>
                    {application ? application.processingFee : ""}
                  </Text>
                  <Text w={"100PX"}>
                    {application ? application.donationAmount : ""}
                  </Text>
                  <Text w={"100PX"}>{application ? application.type : ""}</Text>
                  <Text w={"100PX"}>
                    {application ? application.applicantId : ""}
                  </Text>
                </HStack>
              </VStack>
            </>
          );
        })}
    </VStack>
  );
}
