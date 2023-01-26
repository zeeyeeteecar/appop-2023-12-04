import React, { useEffect, useState, useRef } from "react";
import {
  Center,
  VStack,
  HStack,
  Text,
  Button,
  IconButton,
  Flex,
  Tab,
} from "@chakra-ui/react";

import PrintWalletCardButton from "./PrintWalletCardButton";

export default function WalletCard_Proc_Cmpl({ apiUrl }) {
  const [fetchData, setFetchData] = React.useState(null);

  const dataFetch = async () => {
    setFetchData(null);
    const body = {};

    const data = await (
      await fetch(apiUrl, {
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
    <VStack width={"100%"} h="780px" borderWidth={0} p="10px" overflowY="auto">
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
                  <VStack align={"left"}>
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
                          ? application.permit.expiryDate.substring(0, 7)
                          : " N/A"}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text w={"60PX"} borderWidth={"0px"}>
                        Name:{" "}
                      </Text>
                      <Text w={"300PX"} fontWeight={"bold"}>
                        {application.firstName + " " + application.lastName}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text w={"60PX"}>MoB:</Text>
                      <Text w={"100PX"} fontWeight={"bold"}>
                        {" "}
                        {application.applicant
                          ? application.applicant.dateOfBirth.substring(0, 7)
                          : ""}
                      </Text>
                      <Text w={"60PX"}>User #:</Text>
                      <Text w={"100PX"} fontWeight={"bold"}>
                        {" "}
                        {application.applicant ? application.applicant.id : ""}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text w={"150PX"}>604.232.2404</Text>
                      <Text w={"250PX"}>parkingpermit@rcdrichmond.org</Text>
                    </HStack>
                  </VStack>
                </VStack>

                <PrintWalletCardButton
                  application={application}
                  permitType={application.permitType}
                />
              </HStack>
            </>
          );
        })}
    </VStack>
  );
}
