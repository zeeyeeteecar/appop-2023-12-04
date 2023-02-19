import React from "react";
import { Text, Input, Box } from "@chakra-ui/react";

export default function OverLay_ApplicationDetail_New({
  application,
  applicationContent,
}) {

  const applicationJSON= application?application:null;
  return (
    <div>
      OverLay_ApplicationDetail_New
      ---{applicationJSON['id']
      }---
      {<li>{//applicationJSON.id
      }</li>
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
