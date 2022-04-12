import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", registerUser);
authRouter.post("/sign-in", loginUser);

export default authRouter;