import React from "react";

import { Center, HStack, Text, Box, VStack, Button } from "@chakra-ui/react";

export default function DonationTaxReceipt_Count({ fetchData }:any) {
  return (
    <>
      <HStack borderWidth={0} width={"100%"} spacing={5}>
        <HStack>
          <Text
            color="red.300"
            bgColor={"yellow.100"}
            w="150px"
            alignContent="center"
            align={"center"}
            fontSize="16px"
          >
            Total Record(s):{fetchData.length}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}
