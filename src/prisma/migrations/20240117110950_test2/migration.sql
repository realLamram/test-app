/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Role` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Role_userId_type_key` ON `Role`;

-- CreateIndex
CREATE UNIQUE INDEX `Role_userId_key` ON `Role`(`userId`);
