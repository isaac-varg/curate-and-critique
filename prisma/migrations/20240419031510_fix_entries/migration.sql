-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_entryTypeId_fkey" FOREIGN KEY ("entryTypeId") REFERENCES "entry_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
