/*
  Warnings:

  - The primary key for the `user_score` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[fk_user_id,test_id]` on the table `user_score` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `user_score` DROP PRIMARY KEY;

-- CreateIndex
CREATE UNIQUE INDEX `user_score_fk_user_id_test_id_key` ON `user_score`(`fk_user_id`, `test_id`);
