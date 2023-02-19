import React from "react";
import { Text, Input, Box } from "@chakra-ui/react";

export default function OverLay_ApplicationDetail_New({
  application,
  applicationContent,
}) {
 

  return (
    <div>
      OverLay_ApplicationDetail_New

      <li>{application && application.id}</li>
      <li>{application && application.firstName}</li>
      <li>{application && application.lastName}</li>
      <Box w="full" height="500px" overflowY={"auto"}>
        {applicationContent &&
          Object.getOwnPropertyNames(applicationContent).map((item) => {
            return (
              <>
                <Text>{item + "==" + applicationContent[item]}</Text>
              </>
            );
          })}
      </Box>
    </div>
  );
}
