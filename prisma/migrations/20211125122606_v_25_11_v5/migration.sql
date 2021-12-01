-- DropIndex
DROP INDEX "ProjectTimeSeries_projectId_key";

-- AlterTable
ALTER TABLE "ProjectTimeSeries" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "billPeriodStartDate" SET DATA TYPE DATE,
ALTER COLUMN "billPeriodEndDate" SET DATA TYPE DATE;
