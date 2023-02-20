import React from "react";
import { Text, Input, Box } from "@chakra-ui/react";

export default function OverLay_ApplicationDetail_New(props) {
  // {
  //   application,
  //   applicationContent,
  // }
  const { application, applicationContent } = props;

  const applicationJSON = JSON.stringify(application);
  const application_1 = application && application;
  const newApplication = application && application.newApplication;

  return (
    <div>
      OverLay_ApplicationDetail_New
      <li>{applicationJSON}==</li>
      <li>{application && application.firstName}</li>
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
