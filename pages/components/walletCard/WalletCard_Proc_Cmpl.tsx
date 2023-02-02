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
    <VStack
      width={"100%"}
      h="780px"
      borderWidth={0}
      p="10px"
      overflowY="scroll"
    >
      {fetchData &&
        fetchData.map((application, index) => {
          //const application = applicationProcessing.application;

          return (
            
              <HStack key={index}
                w={"800px"}
                borderWidth={0}
                p="10px"
                m="30px"
                shadow={"2xl"}
                bgColor={"white"}
              >
                <VStack
                  
                  w={"500px"}
                  height="200px"
                  borderWidth={1}
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
                      <Text
                        w={"100PX"}
                        borderWidth={"0px"}
                        fontWeight={"bold"}
                        align={"left"}
                      >
                        {application.permit
                          ? application.permit.rcdPermitId
                          : " N/A"}
                      </Text>
                      <Text w={"50PX"} borderWidth={"0px"} align={"left"}>
                        Expiry:
                      </Text>
                      <Text
                        w={"100PX"}
                        borderWidth={"0px"}
                        fontWeight={"bold"}
                        align={"left"}
                      >
                        {application.permit
                          ? application.permit.expiryDate.substring(0, 7)
                          : " N/A"}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text w={"60PX"} borderWidth={"0px"} align={"left"}>
                        Name:
                      </Text>
                      <Text w={"300PX"} fontWeight={"bold"} align={"left"}>
                        {application.firstName + " " + application.middleName + " " + application.lastName}
                      </Text>
                    </HStack>
                    <HStack>
                      <Text w={"60PX"} align={"left"}>
                        MoB:
                      </Text>
                      <Text w={"100PX"} fontWeight={"bold"} align={"left"}>
                        {application.applicant
                          ? application.applicant.dateOfBirth.substring(0, 7)
                          : ""}
                      </Text>
                      <Text w={"50PX"} align={"left"}>
                        User #:
                      </Text>
                      <Text w={"100PX"} fontWeight={"bold"} align={"left"}>
                        {application.applicant ? application.applicant.id : ""}
                      </Text>
                    </HStack>
                    <HStack borderWidth={0} align="center">
                      <Text w={"150PX"}>604.232.2404</Text>
                      <Text w={"250PX"}>parkingpermit@rcdrichmond.org</Text>
                    </HStack>
                  </VStack>
                </VStack>

                <PrintWalletCardButton
                  application={application}
                  
                  
                 
                />
              </HStack>
            
          );
        })}
    </VStack>
  );
}
