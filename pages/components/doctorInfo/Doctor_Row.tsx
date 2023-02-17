import React from "react";

import {
  Center,
  VStack,
  HStack,
  Text,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Doctor_Row(props) {
  const { doctors } = props;
  return (
    <>
      {doctors &&
        doctors.map((doctor, index) => {
          return (
            <>
              <HStack
                key={index}
                spacing={3}
                padding={"3px"}
                _hover={{
                  background: "gray.100",
                  color: "black",
                }}
              >
                <Text w={"60px"}>{doctor.mspNumber}</Text>
                <Text w={"150px"}>{doctor.firstName}</Text>
                <Text w={"150px"}>{doctor.lastName}</Text>
                <Text w={"150px"}>{doctor.phone}</Text>
                <Text w={"50px"}>{doctor.addressLine2}</Text>
                <Text w={"200px"}>{doctor.addressLine1}</Text>
                <Text w={"150px"}>{doctor.city}</Text>
                <Text w={"150px"}>{doctor.province}</Text>
                <Text w={"150px"}>{doctor.postalCode}</Text>
                <Text w={"150px"}>{doctor.status}</Text>
                <IconButton
                  color="gray.100"
                  borderWidth={0}
                  variant="outline"
                  aria-label="edit doctor info"
                  fontSize="20px"
                  icon={<ExternalLinkIcon />}
                  _hover={{
                    background: "gray.100",
                    color: "black",
                  }}
                />
              </HStack>
            </>
          );
        })}
    </>
  );
}
