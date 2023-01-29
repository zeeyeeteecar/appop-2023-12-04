import { readFileSync } from "fs";
import { prisma } from "../prisma";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  //const prisma = new PrismaClient();
  //await prisma.$connect();
  const {
    userNo,
    fName,
    lName,
    searchDateStart,
    searchDateEnd,
    searchProcessing,
    searchCompleted,
    searchDonationOnly,
  } = req.body;

  const array_status = [] 
  if(searchProcessing){
    array_status.push(searchProcessing)
  }

  if(searchCompleted){
    array_status.push(searchCompleted)
  }
  
  const result = await prisma.application.findMany({
    //==========applicationProcessing=========
    where: {
      createdAt: {
        gte: new Date(searchDateStart),
        lte: new Date(searchDateEnd),
      },

      applicationProcessing: {
        status: {
          in: array_status ,
        },
      },

      donationAmount:{
        gte:searchDonationOnly?1:0,
      }
    },


    select: {
      // id: true,
      // status: true,
      // applicationInvoice: true,
      //application: true,

      firstName: true,
      middleName: true,
      lastName: true,
      phone: true,
      email: true,
      receiveEmailUpdates: true,
      addressLine1: true,
      addressLine2: true,
      city: true,
      province: true,
      country: true,
      postalCode: true,
      permitType: true,
      paymentMethod: true,
      processingFee: true,
      donationAmount: true,
      type: true,
      notes: true,
      applicantId: true,

         permit: {
           select: { rcdPermitId: true, expiryDate: true },
         },
      applicant: { select: { dateOfBirth: true, id: true } },
      applicationProcessing: { select: { status: true } },
    },
    orderBy: {
      applicationProcessing: {
        status: "desc",
      },
    },
    //take:100,
  });

  await prisma.$disconnect();
  res.json(result);
}
