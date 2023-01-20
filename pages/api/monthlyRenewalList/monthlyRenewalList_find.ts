import { prisma } from "../prisma";
//import { PrismaClient } from "@prisma/client";
//const prisma = new PrismaClient();

export default async function handle(req: any, res: any) {
  //const prisma = new PrismaClient();
  //await prisma.$connect();

  const result = await prisma.applicant.findMany({
    where: {
      permits: {
        some: {
          expiryDate: {
            gte: new Date("2023-02-01"),
            lte: new Date("2023-02-28"),
          },
        },
      },
    },
    orderBy: [
      {
        id: "asc",
      },
    ],
    include: {
      permits: true,
    },
  });

  // await prisma.$disconnect();
  // res.json(result);

  // const result = await prisma.performers.findMany({
  //   include: {
  //     donors: true,
  //   },
  //   orderBy: { Performer_id: "asc" },
  // });

  await prisma.$disconnect();
  res.json(result);
}
