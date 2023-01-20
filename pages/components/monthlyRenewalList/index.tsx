import React, { useEffect, useState } from "react";
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

export default function Index() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch("/api/monthlyRenewalList/monthlyRenewalList_find")
      ).json();

      // set state when the data received
      setFetchData(data);
    };
    dataFetch();
  }, []);
  console.log(fetchData);

  const formatDate = (dateFormatNeeded: Date) => {
    const expiryYear = new Date(dateFormatNeeded).getFullYear();
    const expiryMonth = new Date(dateFormatNeeded).getUTCMonth() + 1;
    const expiryDate = new Date(dateFormatNeeded).getUTCDate();
    //console.log("expiryYear", expiryYear);
    return expiryYear + "-" + expiryMonth + "-" + expiryDate;
  };

  return (
    <VStack>
      <HStack>
        <Text></Text>
      </HStack>
      <Table variant="striped" colorScheme="gray">
        <TableCaption>Monthly PP Renewal </TableCaption>
        <Thead>
          <Tr>
            <Th w="40px">User ID</Th>
            <Th>F name</Th>
            <Th>L name</Th>
            <Th w="150px">addressLine1</Th>
            <Th>city</Th>
            <Th w="40px">prov</Th>
            <Th>post</Th>
            <Th w="100px">Expiry Date</Th>
            <Th>PP #</Th>
            <Th>Area</Th>
            <Th>phone</Th>
            <Th>email</Th>
            <Th>phone</Th>
          </Tr>
        </Thead>
        <Tbody>
          {fetchData &&
            fetchData.map((applicant, index) => {
              //console.log("Performer_id==", item.Performer_id);

              const sortedPermits = [...applicant.permits].sort(
                (a, b) => b.rcdPermitId - a.rcdPermitId
              );
              const latestPermitExpiryDate = formatDate(
                sortedPermits[0].expiryDate
              );
              const latestPermitID = sortedPermits[0].rcdPermitId;
              const areaCode = applicant.phone.substring(0, 3);
              const phone =
                applicant.phone.substring(3, 3 + 3) +
                "-" +
                applicant.phone.substring(3 + 3, 3 + 3 + 4);

              return (
                <Tr key={index}>
                  <Td>{applicant.id}</Td>
                  <Td>{applicant.firstName}</Td>
                  <Td>{applicant.lastName}</Td>
                  <Td w="250px">{applicant.addressLine1}</Td>
                  <Td>{applicant.city}</Td>
                  <Td>{applicant.province}</Td>
                  <Td>{applicant.postalCode}</Td>
                  <Td>{latestPermitExpiryDate}</Td>
                  <Td>{latestPermitID}</Td>
                  <Td>{areaCode}</Td>
                  <Td>{phone}</Td>
                  <Td>{applicant.email}</Td>
                  <Td>{applicant.lastName}</Td>
                  {sortedPermits.map((permit, index) => {
                    return (
                      <>
                        <Td w={"100px"}>{formatDate(permit.expiryDate)}</Td>
                      </>
                    );
                  })}
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </VStack>
  );
}
