import { NextApiRequest, NextApiResponse } from "next";
const { PrismaClient } = require("@prisma/client");
//import { PrismaClient } from "@prisma/client";
import project from "pages/page/projects";

export default async function(req, res) {
  //console.log(req.body["1"]);
  const prisma = new PrismaClient();
  //console.log(projectData["project_id"])
  try {
    const subscriberTimeSeries = req.body;
    console.log(req.body);
    //console.log(projectData["project_id"]);
    //console.log(projectData["project_id"]);
    //console.log({ project });

    const project = await prisma.subscriberTimeSeries.create({
      data: {
        subscriberId: subscriberTimeSeries["subscriberId"],
        billPeriodStartDate: subscriberTimeSeries["billPeriodStartDate"],
        billPeriodEndDate: subscriberTimeSeries["billPeriodEndDate"],
        idBillStartEndDate: subscriberTimeSeries["idBillStartEndDate"],
        valueStackCreditDollar: subscriberTimeSeries["valueStackCreditDollar"],
        utilityBillAmount: subscriberTimeSeries["utilityBillAmount"],
        escoChargesDollar: subscriberTimeSeries["escoChargesDollar"],
        actualTotalBill: subscriberTimeSeries["actualTotalBill"],
        actualBilledKwh: subscriberTimeSeries["actualBilledKwh"],
        creditAppliedDollar: subscriberTimeSeries["creditAppliedDollar"],
        previousMonthBank: subscriberTimeSeries["previousMonthBank"],
        monthlyBankContributions:
          subscriberTimeSeries["monthlyBankContributions"],
        bankWithdrawDollar: subscriberTimeSeries["bankWithdrawDollar"],
        bankedBalanceDollar: subscriberTimeSeries["bankedBalanceDollar"],
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
