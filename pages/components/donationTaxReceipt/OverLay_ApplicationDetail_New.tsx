import React from "react";
import { Text, Input, Box } from "@chakra-ui/react";

export default function OverLay_ApplicationDetail_New({
  application,
  applicationContent,
}) {
  return (
    <div>
      OverLay_ApplicationDetail_New
      {//JSON.stringify(application)
      }
      {<li>{application?application.id:"N/A"}</li>
      }
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
