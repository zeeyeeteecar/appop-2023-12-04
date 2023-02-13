import React from "react";
import {
  Center,
  VStack,
  HStack,
  Text,
  Input,
  Box,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

// interface IApplication {
//   application: {
//     type: string;
//     newApplication: any;
//     renewalApplication: any;
//     replacementApplication: any;
//   };
// }

export default function OverLay_showDetails({ application }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const async_applicationType = async () => await application.type;
  const applicationType = async_applicationType + "";


  const type_bgclr_clr = async (Apptype: string) => {
    const bgclr_clr: { category: string; clr: string; bgclr: string }[] = [
      { category: "NEW", clr: "green", bgclr: "green.100" },
      { category: "RENEWAL", clr: "purple", bgclr: "purple.100" },
      { category: "REPLACEMENT", clr: "blue", bgclr: "blue.100" },
    ];
    return bgclr_clr.find((e) => e.category === Apptype);
  };

  const applicationDetailContent = async () => {
    if (application.newApplication) {
      return application.newApplication;
    }
    if (application.renewalApplication) {
      return application.renewalApplication;
    }
    if (application.replacementApplication) {
      return application.replacementApplication;
    }
  };

  return (
    <>
      <HStack
        w="70px"
        borderWidth={1}
        rounded={"full"}
        fontWeight={"semibold"}
        fontSize="12px"
        paddingX={"5px"}
        bgColor={type_bgclr_clr(applicationType)["bgclr"]}
        color={type_bgclr_clr(applicationType)["clr"]}
        //onClick={(e) => onClick_Comp_Temp(e)}
        onClick={onOpen}
        _hover={{
          background: "white",
          borderWidth: "1px",
          borderColor: type_bgclr_clr(applicationType)["clr"] + ".300",
        }}
      >
        <Text p="1px" w={"70px"} borderWidth={0} align={"center"}>
          {
            //async_application().substring(0, 3)
          }
        </Text>
        <ExternalLinkIcon
          color={type_bgclr_clr(applicationType)["clr"] + ".300"}
          w="12px"
        />
      </HStack>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack w="1000px" h="500px">
              <Box w="1000px" h="500px">
                {JSON.stringify(applicationDetailContent())}
              </Box>
            </HStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
