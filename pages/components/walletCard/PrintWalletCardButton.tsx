import React, { useEffect, useState, useRef } from "react";
import {
  Text,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
} from "@chakra-ui/react";

export default function PrintButton({ permitType }) {
  let bgclr = "";
  let fontclr = "";
  let btnDisabled = null;
  if (permitType === "PERMANENT") {
    bgclr = "green.100";
    fontclr = "green.500";
    btnDisabled = false;
  } else {
    bgclr = "pink.100";
    fontclr = "pink.500";
    btnDisabled = true;
  }

  return (
    <>
      <Tag
        size={"lg"}
        variant="solid"
        bgColor={bgclr}
        w={"150px"}
        height={"40px"}
        rounded="3xl"
        alignContent={"center"}
        textAlign="center"
        color={fontclr}
      >
        <Text w={"100%"} align={"center"} >{permitType}</Text>
      </Tag>

      <Button style={{}} isDisabled={btnDisabled}>
        Print Wallet Card
      </Button>
    </>
  );
}
