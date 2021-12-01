/*
  Warnings:

  - You are about to drop the column `host_acc_num` on the `Projectdata` table. All the data in the column will be lost.
  - You are about to drop the column `host_meter_name` on the `Projectdata` table. All the data in the column will be lost.
  - You are about to drop the column `project_img_ref` on the `Projectdata` table. All the data in the column will be lost.
  - You are about to drop the column `project_name` on the `Projectdata` table. All the data in the column will be lost.
  - You are about to drop the column `system_size` on the `Projectdata` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectName]` on the table `Projectdata` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[hostAccNum]` on the table `Projectdata` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `hostAccNum` to the `Projectdata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostMeterName` to the `Projectdata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectName` to the `Projectdata` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Projectdata_host_acc_num_key";

-- DropIndex
DROP INDEX "Projectdata_project_name_key";

-- AlterTable
ALTER TABLE "Projectdata" DROP COLUMN "host_acc_num",
DROP COLUMN "host_meter_name",
DROP COLUMN "project_img_ref",
DROP COLUMN "project_name",
DROP COLUMN "system_size",
ADD COLUMN     "hostAccNum" INTEGER NOT NULL,
ADD COLUMN     "hostMeterName" TEXT NOT NULL,
ADD COLUMN     "projectImgRref" TEXT,
ADD COLUMN     "projectName" VARCHAR(255) NOT NULL,
ADD COLUMN     "systemSize" DECIMAL(8,2);

-- CreateIndex
CREATE UNIQUE INDEX "Projectdata_projectName_key" ON "Projectdata"("projectName");

-- CreateIndex
CREATE UNIQUE INDEX "Projectdata_hostAccNum_key" ON "Projectdata"("hostAccNum");
