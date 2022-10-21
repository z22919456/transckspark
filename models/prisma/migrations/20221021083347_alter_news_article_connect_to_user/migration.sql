/*
  Warnings:

  - You are about to drop the column `account_id` on the `NewsArticle` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `NewsArticle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "NewsArticle" DROP CONSTRAINT "NewsArticle_account_id_fkey";

-- AlterTable
ALTER TABLE "NewsArticle" DROP COLUMN "account_id",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "NewsArticle" ADD CONSTRAINT "NewsArticle_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
