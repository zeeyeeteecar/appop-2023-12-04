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

  return (
    <>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            {fetchData &&
              fetchData.map((permission, index) => {
                //console.log("Performer_id==", item.Performer_id);
                return <><Td>te</Td></>;
              })}
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
}
