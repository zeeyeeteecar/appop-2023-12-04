import React from "react";
import { Text, Input, Box } from "@chakra-ui/react";

export default function OverLay_ApplicationDetail_New(props) {
  // {
  //   application,
  //   applicationContent,
  // }
  const { application, applicationContent } = props;

  let applicationJSON = JSON.stringify(application);
  const applicationJSON_array =
    applicationJSON && applicationJSON.replace(/{|}|"/g, ``).split(",");

  const applicationItem = (
    applicationJSON_array: string[],
    itemTitle: string
  ) => {
    return applicationJSON_array.map((x, key) => {
      const itemName = x.split(":")[0];
      const itemValue = x.split(":")[1];

      if (itemTitle === itemName) {
        return itemValue;
      }
    });
  };

  const application_1 = application && application;
  const newApplication = application && application.newApplication;

  return (
    <div>
      OverLay_ApplicationDetail_New
      <li>{applicationItem(applicationJSON_array, "firstName")}</li>
      <li>{applicationItem(applicationJSON_array, "lastName")}</li>
      <li>{application && application.newApplication.applicationId}</li>
      <Box w="full" height="500px" overflowY={"auto"} borderWidth={2}>
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
