import React from "react";
import Link from "next/link";
import {
  VStack,
  HStack,
  Text,
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
import { EditIcon } from "@chakra-ui/icons";

export default function index() {
  return (
    <VStack>
      <Text>
        <Link href="/components/monthlyRenewalList">M0onthly Renewal List</Link>
      </Text>
      <Text>
        <Link href="/about">About Us</Link>
      </Text>
      <Text>
        <Link href="/blog/hello-world">Blog Post</Link>
      </Text>
    </VStack>
  );
}
