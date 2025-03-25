import { Request, Response } from "express";
import { BlogService } from "../services/BlogService";
import path from "path";
import { FileUtils } from "../utils/file.utils";
import { AttachmentService } from "../services/AttachmentService";
export class PostController {
  static async getBlogs(req: Request, res: Response) {
    try {
      const filter=JSON.parse(req.query?.filter as string||'{}');
      const blogs = await BlogService.getAll(filter);
      res.status(200).json(blogs);
    } catch (error:any) {
        console.log(error.message);
        res.status(500).json({ error: error.message|| "Erreur lors de la récupération des blogs" });
    }
  }

  static async getBlog(req: Request, res: Response) {
    try {
      const blog = await BlogService.getById(parseInt(req.params.id));
      res.status(200).json(blog);
    } catch (error) {
        console.log("get not ok");
        res.status(500).json({ error: "Erreur lors de la récupération des blogs" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const blog = await BlogService.create(req.body);



      if (req.files) {
        const uploadDir = path.join(__dirname, "../../uploads");
        for(const file of req.files as any){
          const filepath=await FileUtils.saveFile(uploadDir, file);
          await AttachmentService.create({filepath,blogId:blog.id});
        }
      }



      res.status(201).json(blog);
    } catch (error:any) {
        console.log("post not ok" + error);
        res.status(500).json({ error: error.message||"Erreur lors de la création du blog" });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const updatedBlog = await BlogService.update(parseInt(req.params.id), req.body);
      res.status(200).json(updatedBlog);
    } catch (error) {
        console.log("put not ok : " + req.params.id);
        res.status(500).json({ error: "Erreur lors de la mise à jour du blog" });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
        await BlogService.delete(parseInt(req.params.id));
      res.status(200).json({ message: "blog deleted successfully" });
    } catch (error) {
        console.log("delete not ok : " + req.params.id);
        res.status(500).json({ error: "Erreur lors de la suppression du blog" });
    }
  }
}
