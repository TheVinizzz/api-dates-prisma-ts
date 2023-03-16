import {Router} from "express"
import { CreateDataController } from "../modules/datas/useCases/createData/CreateDateController"
import { GetAllDatesController } from "../modules/datas/useCases/getAllDates/GetAllDatesController"

const createDataController = new CreateDataController()
const getAllDatesController = new GetAllDatesController()

const datesRoutes = Router()

datesRoutes.post('/', createDataController.handle)
datesRoutes.get('/', getAllDatesController.handle)

export {datesRoutes}