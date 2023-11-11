/*
  Warnings:

  - You are about to drop the `astronauts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `astronauts`;

-- CreateTable
CREATE TABLE `Astronaut` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `surName` VARCHAR(191) NOT NULL,
    `birth` DATE NOT NULL,
    `skill` VARCHAR(191) NOT NULL,
    `active` BOOLEAN NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
