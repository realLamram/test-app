/*
  Warnings:

  - You are about to drop the column `bookImageId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `booklet` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Book` DROP COLUMN `bookImageId`,
    DROP COLUMN `booklet`;
