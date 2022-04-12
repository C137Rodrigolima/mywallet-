import { Router } from "express";
import authRouter from "./authRouter";
import financeRouter from "./financeRouter";

const router = Router();

router.use(authRouter);
router.use(financeRouter);

export default router;