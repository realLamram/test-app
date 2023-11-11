-- CreateTable
CREATE TABLE `Book` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `authorName` VARCHAR(191) NOT NULL,
    `authorSurName` VARCHAR(191) NOT NULL,
    `released` DATE NOT NULL,
    `bookImageId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BookImage` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `cover` LONGBLOB NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_bookImageId_fkey` FOREIGN KEY (`bookImageId`) REFERENCES `BookImage`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
