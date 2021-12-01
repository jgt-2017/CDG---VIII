import { NextApiRequest, NextApiResponse } from "next";
const { PrismaClient } = require("@prisma/client");
//import { PrismaClient } from "@prisma/client";
import project from "pages/page/projects";

export default async function(req, res) {
  //console.log(req.body["1"]);
  const prisma = new PrismaClient();
  //console.log(projectData["project_id"])
  try {
    const projectValues = req.body;
    console.log(req.body);
    //console.log(projectData["project_id"]);
    //console.log(projectData["project_id"]);
    //console.log({ project });

    const project = await prisma.projectData.create({
      data: {
        projectId: projectValues["projectId"], // projectData["project_id"],
        //createdAt: "2016-06-22 19:10:25-07",
        //project_id: projectData.project_id,
        projectName: projectValues["projectName"],
        systemSize: projectValues["systemSize"],
        state: projectValues["state"],
        address: projectValues["address"],
        hostMeterName: projectValues["hostMeterName"],
        hostAccNum: projectValues["hostAccNum"],
        projectImgRef: projectValues["projectImgRef"],
        //project_id: projectData.project_id,
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
