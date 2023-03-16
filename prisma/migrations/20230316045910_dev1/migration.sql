/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `datas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "datas_name_key" ON "datas"("name");
