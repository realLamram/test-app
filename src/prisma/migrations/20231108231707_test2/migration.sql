-- DropForeignKey
ALTER TABLE `Entry` DROP FOREIGN KEY `Entry_bookId_fkey`;

-- AddForeignKey
ALTER TABLE `Entry` ADD CONSTRAINT `Entry_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `Book`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
