import { Router } from "express";
import { datesRoutes } from "./date.routes";

const routes = Router()

routes.use("/dates", datesRoutes);

export { routes }