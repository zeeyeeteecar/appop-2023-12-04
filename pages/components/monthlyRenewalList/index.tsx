import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Text,
  Button,
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
import { SingleDatepicker, RangeDatepicker } from "chakra-dayzed-datepicker";

export default function Index() {
  const currentYear = new Date().getFullYear();
  const nextMonth = new Date().getMonth() + 2;
  const nextMonthDay1: string = "01";
  const nextMonthLastDay = new Date(currentYear, nextMonth, 0).getDate();

  const [fetchData, setFetchData] = useState([]);
  const [dateStart, setDateStart] = useState(
    new Date(currentYear + "-" + nextMonth + "-" + nextMonthDay1)
  );
  const [dateEnd, setDateEnd] = useState(
    new Date(currentYear + "-" + nextMonth + "-" + nextMonthLastDay)
  );

  const dataFetch = async () => {
    const body = { dateStart: dateStart, dateEnd: dateEnd };

    const data = await (
      await fetch("/api/monthlyRenewalList/monthlyRenewalList_find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
    ).json();

    // set state when the data received
    setFetchData(data);
  };

  useEffect(() => {
    // fetch data

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

  const handle_Search = async () => {
    //alert("alert");

    dataFetch();
  };

  return (
    <VStack width={"100%"} height="100vh" borderWidth={4}>
      <HStack>
        <SingleDatepicker
          name="date-start"
          date={dateStart}
          onDateChange={setDateStart}
        />
        <SingleDatepicker
          name="date-end"
          date={dateEnd}
          onDateChange={setDateEnd}
        />
        <Button
          colorScheme={"teal"}
          w="350px"
          variant={"outline"}
          _hover={{
            background: "teal.500",
            color: "white",
          }}
          onClick={handle_Search}
        >
          Search
        </Button>
      </HStack>
      <TableContainer overflowY={"auto"}>
        <Table width={"100%"} colorScheme="gray" size="sm">
          <TableCaption>Monthly PP Renewal </TableCaption>
          <Thead h="40px" bgColor={"green.50"}>
            <Tr color="green.300">
              <Th w="30px">User ID</Th>
              <Th>F name</Th>
              <Th>L name</Th>
              <Th w="150px">address</Th>
              <Th w="80px">city</Th>
              <Th w="40px">prov</Th>
              <Th>post</Th>
              <Th w="100px">Expiry Date</Th>
              <Th>PP #</Th>
              <Th>Area</Th>
              <Th>phone</Th>
              <Th>email</Th>
              <Th>PP History Record</Th>
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
                  <Tr
                    key={index}
                    _hover={{
                      background: "yellow.100",
                      color: "black",
                    }}
                  >
                    <Td>{applicant.id}</Td>
                    <Td>{applicant.firstName}</Td>
                    <Td>{applicant.lastName}</Td>
                    <Td>{applicant.addressLine1}</Td>
                    <Td>{applicant.city}</Td>
                    <Td>{applicant.province}</Td>
                    <Td>{applicant.postalCode}</Td>
                    <Td>{latestPermitExpiryDate}</Td>
                    <Td>{latestPermitID}</Td>
                    <Td>{areaCode}</Td>
                    <Td>{phone}</Td>
                    <Td>{applicant.email}</Td>

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
      </TableContainer>
    </VStack>
  );
}
