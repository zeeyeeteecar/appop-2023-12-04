import React, { Suspense } from "react";
import Link from "next/link";
import {
  Center,
  Button,
  Avatar,
  VStack,
  HStack,
  Text,
  Input,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import GeneratePPTaxReceipt from "./GeneratePPTaxReceipt";
import {
  ArrowUpDownIcon,
  ExternalLinkIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { MdOutlineLocationOn } from "react-icons/md";
import Test from "./Test";

//import OverLay_ApplicationDetail from "./OverLay_ApplicationDetail";

export default function DonationList({ fetchData, setFetchData, handle_sort }) {
  let sum_fee: number = 0;
  let sum_donation: number = 0;
  let sum_total: number = 0;

  fetchData &&
    fetchData.map((application, index) => {
      sum_fee += parseFloat(application.processingFee);
      sum_donation += parseFloat(application.donationAmount);
    });
  sum_total = sum_fee + sum_donation;

  const rowTitle = [
    { title: "Status", fieldName: "applicationProcessing.status", w: "80px" },
    { title: "Type", fieldName: "type", w: "80px" },
    { title: "PP#", fieldName: "permit.rcdPermitId", w: "80px" },
    { title: "Avatar", fieldName: "id", w: "60px" },
    // { title: "F Name", fieldName: "firstName", w: "150px" },
    { title: "User Name", fieldName: "lastName", w: "200px" },
    { title: "phone", fieldName: "phone", w: "150px" },
    { title: "address", fieldName: "addressLine1", w: "250px" },
    // { title: "city", fieldName: "city", w: "100px" },
    // { title: "prov", fieldName: "province", w: "50px" },
    // { title: "postal", fieldName: "postalCode", w: "80px" },
  ];

  return (
    <>
      <VStack borderWidth={"0px"} direction="row" align="stretch" w="100%">
        <HStack
          spacing={2}
          borderWidth={0}
          h="40px"
          borderBottomWidth={1}
          bgColor="green.50"
          color={"green"}
        >
          {rowTitle.map((item, key) => {
            return (
              <>
                <HStack w={item.w} spacing={3} borderWidth={0}>
                  <Box borderWidth={0}>
                    {/* <ArrowUpDownIcon
                      id={item.fieldName}
                      color={"gray.300"}
                      w="12px"
                      onClick={(e) => handle_sort(e)}
                      _hover={{
                        background: "gray.50",
                        color: "black",
                        cursor: "pointer",
                      }}
                    /> */}
                  </Box>
                  <Text borderWidth={0} fontWeight={"semibold"} align="center">
                    {item.title}
                  </Text>
                </HStack>
              </>
            );
          })}

          <HStack spacing={0}>
            <Text
              w={"40px"}
              borderWidth={0}
              fontWeight={"semibold"}
              align="center"
            >
              Fee
            </Text>
            <Text w={"50px"} borderWidth={0} color="red.500">
              {sum_fee}
            </Text>
          </HStack>

          <HStack spacing={0}>
            <Text w={"50px"} borderWidth={0} fontWeight={"semibold"}>
              Dona
            </Text>
            <Text w={"50px"} borderWidth={0} color="red.500">
              {sum_donation}
            </Text>
          </HStack>

          <HStack spacing={0}>
            <Text w={"50px"} borderWidth={0} fontWeight={"semibold"}>
              Total
            </Text>
            <Text w={"50px"} borderWidth={0} color="red.500">
              {sum_total}
            </Text>
          </HStack>

          <Box w={"70px"}></Box>
        </HStack>
      </VStack>
      <VStack
        borderWidth={"0px"}
        direction="row"
        align="stretch"
        w="100%"
        h="full"
        overflowY={"auto"}
      >
        {fetchData &&
          fetchData.map((application: any, index: number) => {
            const clr_donationAmount =
              application.donationAmount == 0 ? "gray.200" : "black";
            const permitType_bgclr_clr = (permitType) => {
              const bgclr_clr = { bgclr: "", clr: "" };

              if (permitType === "PERMANENT") {
                bgclr_clr.bgclr = "red.50";
                bgclr_clr.clr = "magenta";
              }

              if (permitType === "TEMPORARY") {
                bgclr_clr.bgclr = "orange.50";
                bgclr_clr.clr = "orange";
              }
              return bgclr_clr;
            };

            const bgclr_Status = (AppStatus) => {
              const bgclr_clr = [
                { category: "COMPLETED", clr: "blue", bgclr: "blue.100" },
                { category: "IN_PROGRESS", clr: "red", bgclr: "red.100" },
              ];

              return bgclr_clr.find((e) => e.category === AppStatus);
            };

            const type_bgclr_clr = (Apptype: string): any => {
              let bgclr_clr: {
                category: string;
                clr: string;
                bgclr: string;
              }[] = [
                { category: "NEW", clr: "green", bgclr: "green.100" },
                { category: "RENEWAL", clr: "purple", bgclr: "purple.100" },
                { category: "REPLACEMENT", clr: "blue", bgclr: "blue.100" },
              ];
              return bgclr_clr.find((e) => e.category === Apptype);
            };

            const phone =
              application.phone.substring(0, 3) +
              "-" +
              application.phone.substring(3, 6) +
              "-" +
              application.phone.substring(6);

            return (
              <HStack
                key={index}
                minHeight={"70px"}
                spacing={2}
                paddingLeft={"20px"}
                borderWidth={0}
                borderBottomWidth={1}
                borderBottomColor="gray.100"
                color="gray.500"
                _hover={{
                  background: "gray.50",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <Text
                  rounded={"full"}
                  fontSize="12px"
                  fontWeight={"semibold"}
                  p="1px"
                  w={"70px"}
                  borderWidth={0}
                  align={"center"}
                  bgColor={
                    bgclr_Status(application.applicationProcessing.status).bgclr
                  }
                  color={
                    bgclr_Status(application.applicationProcessing.status).clr
                  }
                >
                  {application.applicationProcessing.status.substring(0, 5)}
                </Text>
                <OverLay_ApplicationDetail_1 application={application} />
                <Text
                  rounded={"full"}
                  fontSize="14px"
                  fontWeight={"semibold"}
                  p="1px"
                  w={"80px"}
                  borderWidth={0}
                  bgColor={permitType_bgclr_clr(application.permitType).bgclr}
                  color={permitType_bgclr_clr(application.permitType).clr}
                  align={"center"}
                >
                  {application.permitType.substring(0, 1) +
                    " " +
                    (application.permit ? application.permit.rcdPermitId : "")}
                </Text>
                *************************** Avatar ********************
                <Center borderWidth={0} w="60px">
                  <Avatar
                    w={"30px"}
                    height={"40px"}
                    name={application.firstName + " " + application.lastName}
                    src={randomAvatarLink()}
                  />
                </Center>
                **************************** F Name, L name, user ID
                ********************
                <Box borderWidth={0} minWidth={"200px"} margin={"30px"}>
                  <Text borderWidth={0} fontWeight={"semibold"}>
                    {application.firstName} {application.lastName}
                  </Text>
                  <Text borderWidth={0} color={"green.300"}>
                    user # {application.applicantId}
                  </Text>
                </Box>
                **************************** Phone ********************
                <Text w={"130px"} borderWidth={0}>
                  {phone}
                </Text>
                **************************** Address 1 ********************
                <HStack>
                  <Box>
                    <Text w={"200px"} borderWidth={0}>
                      {application.addressLine1}
                    </Text>
                    <Text borderWidth={0}>
                      {application.city} {application.province}
                      {" , "}
                      {application.postalCode}
                    </Text>
                    <Text
                      w={"50px"}
                      fontSize="12px"
                      borderWidth={0}
                      color="green.300"
                    >
                      {application.addressLine2}
                    </Text>
                  </Box>
                  <Link
                    href={
                      "https://maps.google.com/?q=" +
                      application.addressLine1 +
                      " " +
                      application.city +
                      " " +
                      application.province +
                      " " +
                      application.postalCode
                    }
                    target={"_blank"}
                  >
                    <Box
                      borderWidth={0}
                      color="lightgray"
                      _hover={{
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      <MdOutlineLocationOn fontSize={"25px"} />
                    </Box>
                  </Link>
                </HStack>
                **************************** Fee, Donation, Total***********
                <Text
                  w={"90px"}
                  borderWidth={0}
                  align="end"
                  paddingEnd={"30px"}
                >
                  {application.processingFee}
                </Text>
                <Text
                  w={"100px"}
                  borderWidth={0}
                  color={clr_donationAmount}
                  align="end"
                  paddingEnd={"30px"}
                >
                  {application.donationAmount}
                </Text>
                <Text
                  w={"100px"}
                  borderWidth={0}
                  align="end"
                  paddingEnd={"30px"}
                >
                  {parseFloat(application.processingFee) +
                    parseFloat(application.donationAmount)}
                </Text>
                <Box w={"100px"} h="40px">
                  <GeneratePPTaxReceipt
                    application={application}
                    donationAmount={application.donationAmount}
                  />
                </Box>
                <Test applicationId={application.id} />
              </HStack>
            );
          })}
      </VStack>
    </>
  );
}

///===========================================================================/////

function loadComponent(name: string) {
  const Component = React.lazy(
    () => import(`./OverLay_ApplicationDetail_${name}.tsx`)
  );
  //console.log(`./OverLay_ApplicationDetail_${name}.tsx`);
  return Component;
}

///===========================================================================/////

function OverLay_ApplicationDetail_1({ application }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const [newRenewalReplace, setNewRenewalReplace] = React.useState();

  const type_bgclr_clr = (Apptype: string): any => {
    const bgclr_clr = [
      { category: "NEW", clr: "green", bgclr: "green.100" },
      { category: "RENEWAL", clr: "purple", bgclr: "purple.100" },
      { category: "REPLACEMENT", clr: "blue", bgclr: "blue.100" },
    ];
    return bgclr_clr.find((e) => e.category === Apptype);
  };

  const new_renewal_replacement = (): {
    componentName: string;
    applicationContent: any;
  } => {
    let result: { componentName: string; applicationContent: any } = {
      componentName: "",
      applicationContent: null,
    };

    if (application.newApplication) {
      result.componentName = "New";
      result.applicationContent = application.newApplication;
    }
    if (application.renewalApplication) {
      result.componentName = "Renewal";
      result.applicationContent = application.renewalApplication;
    }
    if (application.replacementApplication) {
      result.componentName = "Replacement";
      result.applicationContent = application.replacementApplication;
    }
    return result;
  };
  const Component = loadComponent(new_renewal_replacement().componentName);

  return (
    <>
      <HStack
        w="70px"
        borderWidth={0}
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
        <Text p="1px" w={"70px"} borderWidth={0} align={"center"}>
          {application.type.substring(0, 3)}
        </Text>
        <ExternalLinkIcon
          color={type_bgclr_clr(application.type).clr + ".500"}
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
        <ModalContent borderWidth={0} maxW="1200px" maxH="750px">
          <ModalHeader borderWidth={0}>
            {new_renewal_replacement().componentName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <React.Suspense fallback={<div>Loading...</div>}>
                <Component
                  application={application}
                  applicant={application.applicant}
                  MedicalInformation={application.applicant.MedicalInformation}
                  permit={application.permit}
                  applicationContent={
                    new_renewal_replacement().applicationContent
                  }
                />
              </React.Suspense>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

const randomAvatarLink_1 = () => {
  const url = "https://api.dicebear.com/5.x/adventurer/svg?seed=";

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return url + randomNumber.toString();
};

const randomAvatarLink = () => {
  const url = "https://avatars.dicebear.com/api/croodles/";

  const randomNumber = Math.floor(Math.random() * 100) + 1;
  return url + randomNumber.toString() + ".svg";
};
