/*
  Warnings:

  - You are about to drop the `Projectdata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Projectdata";

-- CreateTable
CREATE TABLE "ProjectData" (
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectName" VARCHAR(255) NOT NULL,
    "systemSize" DECIMAL(8,2),
    "state" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "hostMeterName" TEXT NOT NULL,
    "hostAccNum" INTEGER NOT NULL,
    "projectImgRef" TEXT,

    CONSTRAINT "ProjectData_pkey" PRIMARY KEY ("projectId")
);

-- CreateTable
CREATE TABLE "ProjectTimeSeries" (
    "projectId" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "billPeriodStartDate" TIMESTAMP(3) NOT NULL,
    "billPeriodEndDate" TIMESTAMP(3) NOT NULL,
    "totalInjectionsKwh" DECIMAL(11,2) NOT NULL,
    "valueStackCreditsDollar" DECIMAL(11,2) NOT NULL,
    "hostBankCreditsDollar" DECIMAL(11,2) NOT NULL,
    "idBillStartEndDate" TEXT NOT NULL,

    CONSTRAINT "ProjectTimeSeries_pkey" PRIMARY KEY ("idBillStartEndDate")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectData_projectName_key" ON "ProjectData"("projectName");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectData_hostAccNum_key" ON "ProjectData"("hostAccNum");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectTimeSeries_projectId_key" ON "ProjectTimeSeries"("projectId");

-- AddForeignKey
ALTER TABLE "ProjectTimeSeries" ADD CONSTRAINT "ProjectTimeSeries_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ProjectData"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;
