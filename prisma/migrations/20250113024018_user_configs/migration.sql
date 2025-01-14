-- CreateTable
CREATE TABLE "user_configs" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_sidebar_collapsed" BOOLEAN NOT NULL,
    "active_theme" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_configs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_configs" ADD CONSTRAINT "user_configs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
