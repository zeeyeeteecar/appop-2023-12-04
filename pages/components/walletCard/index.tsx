import React, { useEffect, useState, useRef } from "react";
import {
  Center,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { jsPDF } from "jspdf";
import PrintWalletCardButton from "./PrintWalletCardButton";

export default function WalletCard() {
  const [fetchData, setFetchData] = React.useState(null);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 50, 200);
    // doc.save("a4.pdf"); // will save the file in the current working directory
    console.log("tet13");
  };

  const formatMoD = (dateFormatNeeded: Date) => {
    const expiryYear = new Date(dateFormatNeeded).getFullYear();
    const expiryMonth = new Date(dateFormatNeeded).getUTCMonth() + 1;
    const expiryDate = new Date(dateFormatNeeded).getUTCDate();
    //console.log("expiryYear", expiryYear);
    return expiryYear + "-" + expiryMonth;
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
    <VStack width={"100%"} h="100vh" borderWidth={3} p="10px" bgColor={"gray.100"}>
      {fetchData &&
        fetchData.map((application, index) => {
          //const application = applicationProcessing.application;

          return (
            <>
              <HStack
                w={"800px"}
                borderWidth={0}
                p="10px"
                m="30px"
                shadow={"2xl"}
                bgColor={"white"}
              >
                <VStack
                  key={index}
                  w={"500px"}
                  height="220px"
                  borderWidth={0}
                  p="20px"
                >
                  <Flex>
                    <Text
                      fontSize={"2xl"}
                      fontWeight={"bold"}
                      borderWidth={"0px"}
                    >
                      Richmond Centre for Disability
                    </Text>
                  </Flex>
                  <VStack>
                    <HStack borderWidth={"0px"}>
                      <Text borderWidth={"0px"}>permit#: </Text>
                      <Text w={"100PX"} borderWidth={"0px"} fontWeight={"bold"}>
                        {application.permit
                          ? application.permit.rcdPermitId
                          : " N/A"}
                      </Text>
                      <Text w={"100PX"} borderWidth={"0px"}>
                        Expiry:{" "}
                      </Text>
                      <Text w={"100PX"} borderWidth={"0px"} fontWeight={"bold"}>
                        {application.permit
                          ? application.permit.expiryDate
                          : " N/A"}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text w={"100PX"} borderWidth={"0px"}>
                        Name:{" "}
                      </Text>
                      <Text w={"300PX"} fontWeight={"bold"}>
                        {application.firstName + " " + application.lastName}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text w={"100PX"}>MoB:</Text>
                      <Text w={"100PX"} fontWeight={"bold"}>
                        {" "}
                        {application.applicant
                          ? application.applicant.dateOfBirth.substring(0, 7)
                          : ""}
                      </Text>
                      <Text w={"100PX"}>User #:</Text>
                      <Text w={"100PX"} fontWeight={"bold"}>
                        {" "}
                        {application.applicant ? application.applicant.id : ""}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text w={"400PX"}>
                        604.232.2404 {"    "}parkingpermit@rcdrichmond.org
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>

                <Center
                  margin-left={"10px"}
                  borderWidth="1px"
                  height="220px"
                  w={"100%"}
                  bgColor="gray.50"

                >
                  <VStack>
                    <PrintWalletCardButton
                      permitType={application.permitType}
                    />
                  </VStack>
                </Center>
              </HStack>
            </>
          );
        })}
    </VStack>
  );
}
