import React from "react";
import { Box, Flex, Center } from "@chakra-ui/react";

import { CSVLink, CSVDownload } from "react-csv";

export default function ExportCSV({ fetchData }) {
  const csvData_1 = [
    ["firstname", "lastname", "email"],
    ["John", "Doe", "john.doe@xyz.com"],
    ["Jane", "Doe", "jane.doe@xyz.com"],
  ];

  const csvData = [
    [
      "Status",
      "UserID",
      "FName",
      "LName",
      "phone",
      "address",
      "city",
      "province",
      "postal",
      "Fee",
      "Dona",
      "Total",
    ],
  ];

  fetchData &&
    fetchData.map((application, index) => {
      const csvDataEachLine = [];
      csvDataEachLine.push(application.applicationProcessing.status);
      csvDataEachLine.push(application.applicantId);
      csvDataEachLine.push(application.firstName);
      csvDataEachLine.push(application.lastName);
      csvDataEachLine.push(application.phone);
      csvDataEachLine.push(application.addressLine1);
      csvDataEachLine.push(application.city);
      csvDataEachLine.push(application.province);
      csvDataEachLine.push(application.postalCode);
      csvDataEachLine.push(application.processingFee);
      csvDataEachLine.push(application.donationAmount);
      csvDataEachLine.push(
        parseFloat(application.processingFee) +
          parseFloat(application.donationAmount)
      );
      csvData.push(csvDataEachLine);
    });
  //console.log(csvData);
  return (
    <>
      <Center
        rounded={3}
        backgroundColor={"gray.100"}
        w={"150px"}
        h={"40px"}
        fontWeight={"semibold"}
        _hover={{
          background: "gray.200",
          color: "black",
        }}
      >
        <CSVLink
          data={csvData}
          filename={"my-file.csv"}
          
        >
          Export
        </CSVLink>
      </Center>
    </>
  );
}
