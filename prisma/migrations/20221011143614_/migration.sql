/*
  Warnings:

  - The primary key for the `article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `article` table. The data in that column could be lost. The data in that column will be cast from `UnsignedInt` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `article` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
