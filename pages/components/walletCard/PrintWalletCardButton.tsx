import React, { useEffect, useState, useRef } from "react";
import { Text, Button, Tag, Center, VStack } from "@chakra-ui/react";
import { jsPDF } from "jspdf";

export default function PrintButton({ application }: any) {
  //const permitType:string = (application.permitType);

  function GeneratePDF(appl) {
    //alert(application);
    //const doc = new jsPDF();

    const doc = new jsPDF("l", "mm", [83, 38]);

    //alert((rcdPermitId))
    const permitID: string = appl.permit
      ? appl.permit.rcdPermitId.toString()
      : "N/A";
    const applicantName = appl.firstName + " " + appl.lastName;
    const expiryDate = appl.permit
      ? application.permit.expiryDate.substring(0, 7)
      : "N/A";

    const Mob = application.applicant
      ? application.applicant.dateOfBirth.substring(0, 7)
      : "N/A";
      const userNo = application.applicant ? application.applicant.id : "N/A";

    doc.setFontSize(15);
    doc.text("Richmond Centre for Disaibility", 5, 10);

    doc.setFontSize(10);
    doc.text("permit # " + permitID, 5, 15);
    doc.text("xpiry: " + expiryDate, 45, 15);
    doc.text("Name: " + applicantName, 5, 20);
    doc.text("MoB: " + Mob, 5, 25);
    doc.text("User # " + userNo, 45, 25);
    doc.text("604.232.2404 parkingpermit@rcdrichmond.org", 7, 30);

    doc.save("a4.pdf"); // will save the file in the current working directory
  }

  let bgclr = "";
  let fontclr = "";
  let btnDisabled = null;
  const permitType: string = application ? application.permitType : "";

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
