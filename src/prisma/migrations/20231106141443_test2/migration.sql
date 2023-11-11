/*
  Warnings:

  - You are about to drop the `BookImage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fileId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_bookImageId_fkey`;

-- AlterTable
ALTER TABLE `Book` ADD COLUMN `fileId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `BookImage`;

-- CreateTable
CREATE TABLE `Entry` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `lastModified` DATETIME(3) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `size` BIGINT NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_fileId_fkey` FOREIGN KEY (`fileId`) REFERENCES `Entry`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
