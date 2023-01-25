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
    <VStack width={"100%"} height="100vh" borderWidth={0} spacing={3}>
      {fetchData &&
        fetchData.map((application, index) => {
          //const application = applicationProcessing.application;

          return (
            <>
              <VStack
                key={index}
                w={"500px"}
                height="220px"
                borderWidth={3}
                p="20px"
              >
                <Flex>
                  <Text
                    fontSize={"2xl"}
                    fontWeight={"bold"}
                    borderWidth={"1px"}
                  >
                    Richmond Centre for Disability
                  </Text>
                </Flex>
                <VStack>
                  <HStack borderWidth={"1px"}>
                    <Text borderWidth={"1px"}>permit#: </Text>
                    <Text w={"100PX"} borderWidth={"1px"} fontWeight={"bold"}>
                      {application.permit
                        ? application.permit.rcdPermitId
                        : " N/A"}
                    </Text>
                    <Text w={"100PX"} borderWidth={"1px"}>
                      Expiry:{" "}
                    </Text>
                    <Text w={"100PX"} borderWidth={"1px"} fontWeight={"bold"}>
                      {application.permit
                        ? application.permit.expiryDate
                        : " N/A"}
                    </Text>
                  </HStack>
                  <HStack>
                    <Text w={"100PX"} borderWidth={"1px"}>
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
                        ? formatMoD(application.applicant.dateOfBirth)
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
