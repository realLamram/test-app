/*
  Warnings:

  - You are about to drop the column `employeeID` on the `Todo` table. All the data in the column will be lost.
  - Added the required column `userID` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Todo` DROP FOREIGN KEY `Todo_employeeID_fkey`;

-- AlterTable
ALTER TABLE `Todo` DROP COLUMN `employeeID`,
    ADD COLUMN `userID` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Todo` ADD CONSTRAINT `Todo_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
