/*
  Warnings:

  - Made the column `updatedAt` on table `Note` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "test" TEXT NOT NULL DEFAULT 'TEST',
ALTER COLUMN "updatedAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET DATA TYPE TIMESTAMP(3);
