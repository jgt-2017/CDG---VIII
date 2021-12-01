/*
  Warnings:

  - A unique constraint covering the columns `[project_name]` on the table `Projectdata` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[host_acc_num]` on the table `Projectdata` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Projectdata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `host_acc_num` to the `Projectdata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `host_meter_name` to the `Projectdata` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Projectdata` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projectdata" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "host_acc_num" INTEGER NOT NULL,
ADD COLUMN     "host_meter_name" TEXT NOT NULL,
ADD COLUMN     "project_img_ref" TEXT,
ADD COLUMN     "state" TEXT NOT NULL,
ALTER COLUMN "project_name" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Projectdata_project_name_key" ON "Projectdata"("project_name");

-- CreateIndex
CREATE UNIQUE INDEX "Projectdata_host_acc_num_key" ON "Projectdata"("host_acc_num");
