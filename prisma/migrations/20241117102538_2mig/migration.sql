/*
  Warnings:

  - You are about to drop the column `avatar` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `github_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_github_id_key` ON `User`;

-- DropIndex
DROP INDEX `User_phone_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `avatar`,
    DROP COLUMN `github_id`,
    DROP COLUMN `phone`,
    DROP COLUMN `updated_at`;
