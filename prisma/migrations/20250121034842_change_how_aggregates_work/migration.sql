/*
  Warnings:

  - You are about to drop the column `parent_id` on the `collections` table. All the data in the column will be lost.
  - You are about to drop the column `collection_available` on the `entry_properties` table. All the data in the column will be lost.
  - You are about to drop the column `globally_available` on the `entry_properties` table. All the data in the column will be lost.
  - Added the required column `isAggregator` to the `entry_properties` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "collections" DROP CONSTRAINT "collections_parent_id_fkey";

-- AlterTable
ALTER TABLE "collections" DROP COLUMN "parent_id";

-- AlterTable
ALTER TABLE "entry_properties" DROP COLUMN "collection_available",
DROP COLUMN "globally_available",
ADD COLUMN     "isAggregator" BOOLEAN NOT NULL;
