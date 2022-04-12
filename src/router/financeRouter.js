import { Router } from "express";
import { getAllFinancialEvents, getFinanceMontante, postFinancialEventasync } from "../controllers/financeController.js";
import { validateToken } from "../middlewares/authTokenMiddleware.js";

const financeRouter = Router();

financeRouter.post("/financial-events", validateToken, postFinancialEventasync);
financeRouter.get("/financial-events", validateToken, getAllFinancialEvents);
financeRouter.get("/financial-events/sum", validateToken, getFinanceMontante);

export default financeRouter;