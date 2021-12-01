-- CreateTable
CREATE TABLE "SubscriberData" (
    "projectId" TEXT NOT NULL,
    "subscriberId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userType" TEXT NOT NULL,
    "subsEmail" TEXT NOT NULL,
    "subsPassword" TEXT NOT NULL,
    "utilityName" TEXT NOT NULL,
    "utilityAccNum" TEXT NOT NULL,
    "enrollDate" DATE NOT NULL,
    "allocationPercent" DECIMAL(5,2) NOT NULL,
    "serviceClass" TEXT NOT NULL,

    CONSTRAINT "SubscriberData_pkey" PRIMARY KEY ("subscriberId")
);

-- CreateTable
CREATE TABLE "SubscriberTimeSeries" (
    "subscriberId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "billPeriodStartDate" DATE NOT NULL,
    "billPeriodEndDate" DATE NOT NULL,
    "idBillStartEndDate" TEXT NOT NULL,
    "valueStackCreditDollar" DECIMAL(11,2) NOT NULL,
    "utilityBillAmount" DECIMAL(11,2) NOT NULL,
    "escoChargesDollar" DECIMAL(11,2) NOT NULL,
    "actualTotalBill" DECIMAL(11,2) NOT NULL,
    "actualBilledKwh" DECIMAL(11,2) NOT NULL,
    "creditAppliedDollar" DECIMAL(11,2) NOT NULL,
    "previousMonthBank" DECIMAL(11,2) NOT NULL,
    "monthlyBankContributions" DECIMAL(11,2) NOT NULL,
    "bankWithdrawDollar" DECIMAL(11,2) NOT NULL,
    "bankedBalanceDollars" DECIMAL(11,2) NOT NULL,

    CONSTRAINT "SubscriberTimeSeries_pkey" PRIMARY KEY ("idBillStartEndDate")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubscriberData_subsEmail_key" ON "SubscriberData"("subsEmail");

-- CreateIndex
CREATE UNIQUE INDEX "SubscriberData_utilityAccNum_key" ON "SubscriberData"("utilityAccNum");

-- AddForeignKey
ALTER TABLE "SubscriberData" ADD CONSTRAINT "SubscriberData_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "ProjectData"("projectId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscriberTimeSeries" ADD CONSTRAINT "SubscriberTimeSeries_subscriberId_fkey" FOREIGN KEY ("subscriberId") REFERENCES "SubscriberData"("subscriberId") ON DELETE RESTRICT ON UPDATE CASCADE;
