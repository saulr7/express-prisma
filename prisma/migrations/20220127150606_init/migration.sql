-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "employeId" INTEGER;

-- CreateTable
CREATE TABLE "Employe" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "age" INTEGER NOT NULL DEFAULT 0,
    "married" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Employe_pkey" PRIMARY KEY ("id")
);
