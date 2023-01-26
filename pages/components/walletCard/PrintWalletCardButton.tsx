import React, { useEffect, useState, useRef } from "react";
import { Text, Button, Tag } from "@chakra-ui/react";
import { jsPDF } from "jspdf";


export default function PrintButton({ application, permitType}:any & string) {

  //const permitType:string = (application.permitType);

  function generatePDF() {
    //alert(application);
    //const doc = new jsPDF();
    const doc = new jsPDF("p", "mm", [500, 250]);

    doc.text("Richmond Centre for Disaibility", 10, 30);

    doc.text("permit#:", 20, 30);

    const permitID = application.permit
      ? application.permit.rcdPermitId
      : " N/A";

      const applicantName = application.firstName + " " + application.lastName
    doc.text(permitID, 20, 50);
    doc.text(applicantName, 40, 50);

    doc.save("a4.pdf"); // will save the file in the current working directory
  }

 

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
        <Text w={"100%"} align={"center"}>
          {permitType}
        </Text>
      </Tag>

      <Button onClick={generatePDF}>Print Wallet Card</Button>
    </>
  );
}
