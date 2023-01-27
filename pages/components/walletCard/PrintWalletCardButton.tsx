import React, { useEffect, useState, useRef } from "react";
import { Text, Button, Tag, Center, VStack } from "@chakra-ui/react";
import { jsPDF } from "jspdf";

export default function PrintButton({ application }: any ) {
  //const permitType:string = (application.permitType);



  function GeneratePDF(appl) {
    //alert(application);
    //const doc = new jsPDF();
    
    const doc = new jsPDF("p", "mm", [83, 83]);
    doc.text("Richmond Centre for Disaibility", 10, 5);
    //alert((rcdPermitId))
    const permitID: string = application.permit
      ? application.permit.rcdPermitId.toString()
      : "N/A";
    const applicantName = appl.firstName + " " + appl.lastName;
    doc.text("permit# " + permitID, 10, 10);
    doc.text(applicantName, 60, 50);
    doc.save("a4.pdf"); // will save the file in the current working directory
  }


  let bgclr = "";
  let fontclr = "";
  let btnDisabled = null;
  const permitType:string = application?application.permitType:""

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
    <Center
      margin-left={"10px"}
      borderWidth="0px"
      height="220px"
      w={"100%"}
      bgColor="gray.50"
    >
      <VStack>
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
          <Text w={"100%"} align={"center"}>
            {permitType}
          </Text>
        </Tag>

        <Button
          onClick={() => GeneratePDF(application)}
          isDisabled={btnDisabled}
        >
          Print Wallet Card
        </Button>
      </VStack>
    </Center>
  );
}
