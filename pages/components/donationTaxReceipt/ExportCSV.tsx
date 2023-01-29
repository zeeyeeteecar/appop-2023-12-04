import { CSVLink, CSVDownload } from "react-csv";

import React from "react";

export default function ExportCSV({ fetchData }) {
  const csvData_1 = [
    ["firstname", "lastname", "email"],
    ["John", "Doe", "john.doe@xyz.com"],
    ["Jane", "Doe", "jane.doe@xyz.com"],
  ];

  const csvData = [
    [
      "Status",
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
  console.log(csvData);
  return (
    <>
      <CSVLink data={csvData}>Export</CSVLink>

      <CSVDownload data={csvData} target="_blank" /> 
    </>
  );
}
