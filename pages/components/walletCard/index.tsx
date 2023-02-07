import React from "react";
import {
  Center,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
} from "@chakra-ui/react";

import WalletCard_Proc_Cmpl from "./WalletCard_Proc_Cmpl";
import SideBar from "../common/SideBar";

export default function index() {
  return (
    <HStack width={"100%"} h="100vh" borderWidth={0} bgColor="">
      <SideBar />
      <VStack width={"full"} h="100%" borderWidth={0} p="10px" bgColor="white">
        <Tabs
          variant="enclosed"
          colorScheme="red"
          width={"100%"}
          borderWidth={0}
          h={"100%"}
        >
          <TabList>
            <Tab>Completed</Tab>
            <Tab>In Processing</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <WalletCard_Proc_Cmpl
                apiUrl={"/api/walletCard/waletCard_Completed_find"}
              />
            </TabPanel>
            <TabPanel textAlign={"center"}>
              <WalletCard_Proc_Cmpl
                apiUrl={"/api/walletCard/walletCard_Processing_find"}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </HStack>
  );
}
