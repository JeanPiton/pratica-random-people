import personController from "../controller/person.controller";
import { Router } from "express";

const personRouter = Router()

personRouter.get("/person",personController.getPerson)

export default personRouter