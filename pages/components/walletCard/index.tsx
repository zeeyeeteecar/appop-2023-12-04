import React from "react";
import {
  Center,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import WalletCard_Proc_Cmpl from "./WalletCard_Proc_Cmpl";

export default function index() {
  return (
    <Center width={"100%"} h="100vh" borderWidth={0} bgColor="gray.200">
      <VStack width={"1000px"} h="100%" borderWidth={0} p="10px" bgColor="white">
        <Tabs
          variant="enclosed"
          colorScheme="red"
          width={"100%"}
          borderWidth={1}
          h={"100%"}
        >
          <TabList>
            <Tab>In Processing</Tab>
            <Tab>Completed</Tab>
          </TabList>
          <TabPanels>
            <TabPanel textAlign={"center"}>
              <WalletCard_Proc_Cmpl
                apiUrl={"/api/walletCard/walletCard_Processing_find"}
              />
            </TabPanel>
            <TabPanel>
              <WalletCard_Proc_Cmpl
                apiUrl={"/api/walletCard/waletCard_Completed_find"}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Center>
  );
}
