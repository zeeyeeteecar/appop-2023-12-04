import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import { Center, VStack, Text, Box, Input, HStack } from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";

export default function DayOvMonth_Row() {
  const getDaysInMonth = (month, year) =>
    new Array(31)
      .fill("")
      .map((v, i) => new Date(year, month - 1, i + 1))
      .filter((v) => v.getMonth() === month - 1);

  const monthNumbers = Array(12)
    .fill(0)
    .map((e, i) => i + 1);

  return (
    <>
      {monthNumbers.map((monthNumber, key) => {
        const daysOfMonth = getDaysInMonth(monthNumber, 2022);
        return (
          <>
            <HStack borderWidth={1}>
              <Box borderWidth={1} w="100px">
                Month ({monthNumber})
              </Box>
              {daysOfMonth &&
                daysOfMonth.map((eachDay, key) => {
                  const weekday = moment(eachDay).day();
                  const monthday = moment(eachDay).date();

                  const dayOvMonth_gbclr = weekday in [6, 0] ? "pink" : "";

                  return (
                    <>
                      <Center key={key} w="35px" bgColor={dayOvMonth_gbclr}>
                        {monthday}
                      </Center>
                    </>
                  );
                })}
            </HStack>
          </>
        );
      })}
    </>
  );
}
