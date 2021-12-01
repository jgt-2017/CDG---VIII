/*
  Warnings:

  - You are about to drop the column `projectImgRref` on the `Projectdata` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Projectdata" DROP COLUMN "projectImgRref",
ADD COLUMN     "projectImgRef" TEXT;
