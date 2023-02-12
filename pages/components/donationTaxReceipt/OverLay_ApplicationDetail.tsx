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

export default function OverLay_showDetails({ application }:any) {
  const [applicationDetails, setApplicationDetails] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const type_bgclr_clr = (Apptype) => {
    const bgclr_clr = [
      { category: "NEW", clr: "green", bgclr: "green.100" },
      { category: "RENEWAL", clr: "purple", bgclr: "purple.100" },
      { category: "REPLACEMENT", clr: "blue", bgclr: "blue.100" },
    ];
    return bgclr_clr.find((e) => e.category === Apptype);
  };

  const applicationDetailContent = () => {
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


  // const fetchData_ApplicationDetails = async (applicationId) => {
  //   //alert("applicationId: " + e.target.id);

  //   // setFetchData([]);
  //   const body = {
  //     applicationId: applicationId,
  //   };
  //   console.log("body: ", body);

  //   const data = await (
  //     await fetch(
  //       "/api/donationTaxReceipt/applicationInfo_new_renewal_replacement",
  //       {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(body),
  //       }
  //     )
  //   ).json();

  //   setApplicationDetails(data);
  // };

  // console.log(applicationDetails);

  // React.useEffect(() => {
  //   fetchData_ApplicationDetails(application.id);
  // }, []);

  return (
    <>
      <HStack
       
        w="70px"
        borderWidth={1}
        rounded={"full"}
        fontWeight={"semibold"}
        fontSize="12px"
        paddingX={"5px"}
        bgColor={type_bgclr_clr(application.type).bgclr}
        color={type_bgclr_clr(application.type).clr}
        //onClick={(e) => onClick_Comp_Temp(e)}
        onClick={onOpen}
        _hover={{
          background: "white",
          borderWidth: "1px",
          borderColor: type_bgclr_clr(application.type).clr + ".300",
        }}
      >
        <Text
        
          p="1px"
          w={"70px"}
          borderWidth={0}
          align={"center"}
        >
          {application.type.substring(0, 3)}
        </Text>
        <ExternalLinkIcon
          color={type_bgclr_clr(application.type).clr + ".300"}
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
