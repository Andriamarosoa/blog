import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { TokenController } from "../controllers/TokenController";

const router = Router();

router.post("/login", TokenController.login);
router.get("/test/:tokenValue", TokenController.test);
router.delete("/:tokenValue", TokenController.logout);

export default router;
