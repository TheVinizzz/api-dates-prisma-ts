import { Request, Response } from "express";
import { CreateDataUseCase } from "./CreateDataUseCase";

export class CreateDataController {
    async handle(req: Request, res: Response) {
        const {name, date} = req.body;

        const createDataUseCase = new CreateDataUseCase();

        const result = await createDataUseCase.execute({name, date});

        return res.status(201).json(result)
    }
}