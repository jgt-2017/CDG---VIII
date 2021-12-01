import { NextApiRequest, NextApiResponse } from "next";
const { PrismaClient } = require("@prisma/client");
//import { PrismaClient } from "@prisma/client";
import project from "pages/page/projects";

export default async function(req, res) {
  //console.log(req.body["1"]);
  const prisma = new PrismaClient();
  //console.log(projectData["project_id"])
  try {
    const projectTimeSeries = req.body;
    console.log(req.body);
    //console.log(projectData["project_id"]);
    //console.log(projectData["project_id"]);
    //console.log({ project });

    const project = await prisma.projectTimeSeries.create({
      data: {
        projectId: projectTimeSeries["projectId"],
        billPeriodStartDate: projectTimeSeries["billPeriodStartDate"],
        billPeriodEndDate: projectTimeSeries["billPeriodEndDate"],
        totalInjectionsKwh: projectTimeSeries["totalInjectionsKwh"],
        valueStackCreditsDollar: projectTimeSeries["valueStackCreditsDollar"],
        hostBankCreditsDollar: projectTimeSeries["hostBankCreditsDollar"],
        idBillStartEndDate: projectTimeSeries["idBillStartEndDate"],
      },
    });
    res.json(201);
    //res.json({ project });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({ error: "Sorry unable to save this data to database" });
  } finally {
    await prisma.$disconnect();
  }
}
