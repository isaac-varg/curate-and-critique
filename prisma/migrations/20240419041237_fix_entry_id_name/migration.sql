/*
  Warnings:

  - You are about to drop the column `entryTypeId` on the `EntryData` table. All the data in the column will be lost.
  - Added the required column `entryId` to the `EntryData` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EntryData" DROP CONSTRAINT "EntryData_entryTypeId_fkey";

-- AlterTable
ALTER TABLE "EntryData" DROP COLUMN "entryTypeId",
ADD COLUMN     "entryId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EntryData" ADD CONSTRAINT "EntryData_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "Entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
