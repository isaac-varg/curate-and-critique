-- CreateTable
CREATE TABLE "entry_properties" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "required" BOOLEAN NOT NULL,
    "sequence" INTEGER NOT NULL,
    "entryTypeId" TEXT NOT NULL,

    CONSTRAINT "entry_properties_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "entry_properties" ADD CONSTRAINT "entry_properties_entryTypeId_fkey" FOREIGN KEY ("entryTypeId") REFERENCES "entry_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
