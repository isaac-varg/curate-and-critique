-- AlterTable
ALTER TABLE "images" ALTER COLUMN "updated_at" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Entry" (
    "id" TEXT NOT NULL,
    "entryTypeId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntryData" (
    "id" TEXT NOT NULL,
    "entryTypeId" TEXT NOT NULL,
    "entryPropertyId" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "EntryData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EntryData" ADD CONSTRAINT "EntryData_entryTypeId_fkey" FOREIGN KEY ("entryTypeId") REFERENCES "Entry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntryData" ADD CONSTRAINT "EntryData_entryPropertyId_fkey" FOREIGN KEY ("entryPropertyId") REFERENCES "entry_properties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
