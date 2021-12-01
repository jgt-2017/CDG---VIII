/*
  Warnings:

  - You are about to alter the column `system_size` on the `Projectdata` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(6,2)`.

*/
-- AlterTable
ALTER TABLE "Projectdata" ALTER COLUMN "system_size" SET DATA TYPE DECIMAL(6,2);
