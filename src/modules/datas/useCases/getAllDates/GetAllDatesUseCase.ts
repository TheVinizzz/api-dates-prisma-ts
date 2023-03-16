import { prisma } from "../../../../prisma/client";

export class GetAllDatesUseCase {
  async execute(): Promise<any[]> {
    const dates = await prisma.datas.findMany({});

    return dates;
  }
}