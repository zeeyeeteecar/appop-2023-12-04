import React from 'react'

export default function DonationFind_1() {
  return (
    <div>DonationFind_1</div>
  )
}

// import React from "react";
// import {
//   Center,
//   VStack,
//   HStack,
//   Text,
//   Input,
//   Box,
//   Radio,
//   RadioGroup,
//   Checkbox,
//   CheckboxGroup,
//   Button,
//   IconButton,
// } from "@chakra-ui/react";
// import GeneratePPTaxReceipt from "./GeneratePPTaxReceipt";

// export default function DonationList({ fetchData }) {
//   // const [sumDonation, setSumDonation] = React.useState(0);
//   // const [sumFee, setSumFee] =  React.useState(0);
//   // const [sumTotal, setSumTotal] =  React.useState(0);

//   // const sum_Fee = fetchData.reduce((acc, obj) => {
//   //   return acc + parseFloat(obj.processingFee);
//   // }, 0);

//   // const sum_donation = fetchData.reduce((acc, obj) => {
//   //   return acc + parseFloat(obj.donationAmount);
//   // }, 0);

//   // const sum_total = fetchData.reduce((acc, obj) => {
//   //   return acc + parseFloat(obj.processingFee) + parseFloat(obj.donationAmount);
//   // }, 0);
//   let sum_fee: number = 0;
//   let sum_donation: number = 0;
//   let sum_total: number = 0;

//   fetchData &&
//     fetchData.map((application, index) => {
//       sum_fee += parseFloat(application.processingFee);
//       sum_donation += parseFloat(application.donationAmount);
//     });
//   sum_total = sum_fee + sum_donation;

//   return (
//     <>
//       <VStack borderWidth={"0px"} direction="row" align="stretch" w="100%">
//         <HStack spacing={0} h="50px" borderBottomWidth={1}>
//           <Text w={"70px"} borderWidth={1} fontWeight={"bold"} align="center">
//             Status
//           </Text>
//           <Text w={"70px"} borderWidth={1} fontWeight={"bold"} align="center">
//             Type
//           </Text>
//           <Text w={"70px"} borderWidth={1} fontWeight={"bold"} align="center">
//             Type
//           </Text>
//           {/* <Text w={"70px"} borderWidth={1} fontWeight={"bold"} align="center">
//             User #
//           </Text> */}
//           <Text w={"150px"} borderWidth={1} fontWeight={"bold"}>
//             FName
//           </Text>
//           <Text w={"100px"} borderWidth={1} fontWeight={"bold"}>
//             LName
//           </Text>
//           <Text w={"150px"} borderWidth={1} fontWeight={"bold"} align="center">
//             phone
//           </Text>
//           <Text w={"200px"} borderWidth={1} fontWeight={"bold"} align="center">
//             address
//           </Text>
//           <Text w={"100px"} borderWidth={1} fontWeight={"bold"} align="center">
//             city
//           </Text>
//           <Text w={"50px"} borderWidth={1} fontWeight={"bold"} align="center">
//             prov
//           </Text>
//           <Text w={"80px"} borderWidth={1} fontWeight={"bold"} align="center">
//             postal
//           </Text>
//           <HStack spacing={0}>
//             <Text w={"30px"} borderWidth={1} fontWeight={"bold"} align="center">
//               Fee
//             </Text>
//             <Text w={"50px"} borderWidth={1} color="gray.500">
//               {sum_fee}
//             </Text>
//           </HStack>

//           <HStack spacing={0}>
//             <Text w={"50px"} borderWidth={1} fontWeight={"bold"}>
//               Dona
//             </Text>
//             <Text w={"50px"} borderWidth={1} color="gray.500">
//               {sum_donation}
//             </Text>
//           </HStack>

//           <HStack spacing={0}>
//             <Text w={"50px"} borderWidth={1} fontWeight={"bold"}>
//               Total
//             </Text>
//             <Text w={"50px"} borderWidth={1} color="gray.500">
//               {sum_total}
//             </Text>
//           </HStack>

//           <Box w={"70px"}></Box>
//         </HStack>
//       </VStack>
//       <VStack
//         borderWidth={"0px"}
//         direction="row"
//         align="stretch"
//         w="100%"
//         overflowY={"auto"}
//       >
//         {fetchData &&
//           fetchData.map((application, index) => {
//             const clr_donationAmount =
//               application.donationAmount == 0 ? "gray.200" : "black";
//             const bgclr_permitType =
//               application.permitType === "PERMANENT"
//                 ? "pink.100"
//                 : "orange.100";

//             function bgclr_Type(Apptype): string {
//               if (Apptype === "NEW") return "green.100";
//               if (Apptype === "RENEWAL") return "purple.100";
//               if (Apptype === "REPLACEMENT") return "blue.100";
//             }

//             function bgclr_Status(Apptype): string {
//               if (Apptype === "COMPLETED") return "blue.100";
//               if (Apptype === "IN_PROGRESS") return "red.100";
//             }

//             const phone =
//               application.phone.substring(0, 3) +
//               "-" +
//               application.phone.substring(3, 6) +
//               "-" +
//               application.phone.substring(6);

//             return (
//               <HStack
//                 key={index}
//                 h="50px"
//                 spacing={0}
//                 _hover={{
//                   background: "gray.50",
//                   color: "black",
//                 }}
//               >
//                 <HStack>
//                   <Text
//                     w={"70px"}
//                     borderWidth={1}
//                     align={"center"}
//                     bgColor={bgclr_Status(
//                       application.applicationProcessing.status
//                     )}
//                   >
//                     {application.applicationProcessing.status.substring(0, 5)}
//                   </Text>
//                   <Text
//                     w={"70px"}
//                     borderWidth={1}
//                     bgColor={bgclr_permitType}
//                     align={"center"}
//                   >
//                     {application.permitType.substring(0, 4)}
//                   </Text>
//                   <Text
//                     w={"70px"}
//                     borderWidth={1}
//                     align={"center"}
//                     bgColor={bgclr_Type(application.type)}
//                   >
//                     {application.type.substring(0, 3)}
//                   </Text>
//                 </HStack>
//                 <VStack align={"start"}>
//                   <HStack>
//                     <Text w={"120px"} borderWidth={1} align="center">
//                       user # {application.applicantId}
//                     </Text>
//                     <Text w={"150px"} borderWidth={1}>
//                       {application.firstName}
//                     </Text>
//                     <Text w={"100px"} borderWidth={1}>
//                       {application.middleName}
//                     </Text>
//                     <Text w={"100px"} borderWidth={1}>
//                       {application.lastName}
//                     </Text>
//                     <Text w={"150px"} borderWidth={1}>
//                       {phone}
//                     </Text>
//                   </HStack>
                
//                 <HStack>
//                   <Box w={"120px"} ></Box>
//                   <Text w={"200px"} borderWidth={1}>
//                     {application.addressLine1}
//                   </Text>
//                   <Text w={"100px"} borderWidth={1}>
//                     {application.city}
//                   </Text>
//                   <Text w={"50px"} borderWidth={1}>
//                     {application.province}
//                   </Text>
//                   <Text w={"100px"} borderWidth={1}>
//                     {application.postalCode}
//                   </Text>
//                 </HStack>
//                 </VStack>
//                 <HStack>
//                   <Text w={"80px"} borderWidth={1}>
//                     {application.processingFee}
//                   </Text>
//                   <Text w={"80px"} borderWidth={1} color={clr_donationAmount}>
//                     {application.donationAmount}
//                   </Text>
//                   <Text w={"80px"} borderWidth={1}>
//                     {parseFloat(application.processingFee) +
//                       parseFloat(application.donationAmount)}
//                   </Text>
//                   <Box w={"70px"} h="40px">
//                     <GeneratePPTaxReceipt
//                       application={application}
//                       donationAmount={application.donationAmount}
//                     />
//                   </Box>
//                 </HStack>
//               </HStack>
//             );
//           })}
//       </VStack>
//     </>
//   );
// }
