/*
  Warnings:

  - You are about to alter the column `extension` on the `Entry` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE `Entry` MODIFY `extension` VARCHAR(255) NOT NULL;
