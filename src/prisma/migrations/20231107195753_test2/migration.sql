/*
  Warnings:

  - Added the required column `extension` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entry` ADD COLUMN `extension` ENUM('jpg', 'jpeg', 'png') NOT NULL,
    ADD COLUMN `path` VARCHAR(255) NOT NULL,
    ADD COLUMN `type` ENUM('cover', 'back') NOT NULL;
