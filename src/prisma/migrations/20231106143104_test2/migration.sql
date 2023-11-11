/*
  Warnings:

  - You are about to drop the column `fileId` on the `Book` table. All the data in the column will be lost.
  - Added the required column `bookId` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_fileId_fkey`;

-- DropIndex
DROP INDEX `Book_bookImageId_fkey` ON `Book`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `fileId`;

-- AlterTable
ALTER TABLE `Entry` ADD COLUMN `bookId` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Entry` ADD CONSTRAINT `Entry_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
