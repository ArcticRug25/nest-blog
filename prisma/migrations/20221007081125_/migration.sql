/*
  Warnings:

  - Added the required column `updateTime` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `updateTime` DATETIME(3) NOT NULL;
