/*
  Warnings:

  - You are about to drop the `astronaut` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_authorId_fkey`;

-- DropForeignKey
ALTER TABLE `book` DROP FOREIGN KEY `Book_bookImageId_fkey`;

-- DropTable
DROP TABLE `astronaut`;

-- DropTable
DROP TABLE `book`;

-- DropTable
DROP TABLE `employee`;

-- CreateTable
CREATE TABLE `Employee` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `surName` VARCHAR(191) NOT NULL,
    `birth` DATE NOT NULL,
    `skill` VARCHAR(191) NULL,
    `active` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Astronaut` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `surName` VARCHAR(191) NOT NULL,
    `birth` DATE NOT NULL,
    `skill` VARCHAR(191) NOT NULL,
    `hair` VARCHAR(191) NULL,
    `eyes` VARCHAR(191) NULL,
    `active` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Book` (
    `id` VARCHAR(191) NOT NULL,
    `booklet` LONGBLOB NULL,
    `title` VARCHAR(191) NOT NULL,
    `released` INTEGER NOT NULL,
    `bookImageId` VARCHAR(191) NULL,
    `authorId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `Author`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_bookImageId_fkey` FOREIGN KEY (`bookImageId`) REFERENCES `BookImage`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
