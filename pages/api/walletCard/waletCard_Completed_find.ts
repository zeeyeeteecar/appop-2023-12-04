import { readFileSync } from "fs";
import { prisma } from "../prisma";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  //const prisma = new PrismaClient();
  //await prisma.$connect();
  const {} = req.body;

  const result = await prisma.application.findMany({
    //==========applicationProcessing=========
    where: {
      applicationProcessing: {
        status: "COMPLETED",

      },

      // application: {
      //   firstName: "Claire",
      // },
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
      applicant: { select: { dateOfBirth: true,id:true } },
    },
    orderBy:{id:"desc"},
    take:200,

  });

  await prisma.$disconnect();
  res.json(result);
}
