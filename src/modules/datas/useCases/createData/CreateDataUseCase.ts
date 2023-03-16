//import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateDataDto } from "../../dtos/CreateDatasDTO";

export class CreateDataUseCase {
    async execute({name, date}: CreateDataDto): Promise<any> {

        const dateAlreadyExist = await prisma.datas.findUnique({
            where: {
                name,
            }
        });

        if(dateAlreadyExist) {
            throw new Error("Banana")
        } 
        
        const createDate = await prisma.datas.create({
            data: {
                name, date
            }
        })

        return createDate
    }
}