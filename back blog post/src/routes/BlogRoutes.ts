import express from "express";
import { PostController } from "../controllers/BlogController";
import { upload } from "../middlewares/upload";

const router = express.Router();

router.get("/", PostController.getBlogs);
router.get("/:id", PostController.getBlog);
router.post("/",upload.array("attachments"), PostController.create);
router.put("/:id", PostController.update);
router.delete("/:id", PostController.delete);

export default router;
