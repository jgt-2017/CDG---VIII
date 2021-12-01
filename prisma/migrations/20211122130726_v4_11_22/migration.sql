/*
  Warnings:

  - You are about to drop the `Project_data` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Project_data";

-- CreateTable
CREATE TABLE "Projectdata" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Projectdata_pkey" PRIMARY KEY ("id")
);
