import { Request, Response } from "express";
import { GetAllDatesUseCase } from "./GetAllDatesUseCase";

export class GetAllDatesController {
  async handle(req: Request, res: Response) {
    const getAllDatesUseCase = new GetAllDatesUseCase();

    const result = await getAllDatesUseCase.execute();

    return res.status(200).json(result);
  }
}