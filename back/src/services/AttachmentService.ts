import { AppDataSource } from "../data-source";
import { Attachment } from "../entities/Attachment";
import { Blog } from "../entities/Blog";

const blogRepository = AppDataSource.getRepository(Blog);
const attachmentRepository = AppDataSource.getRepository(Attachment);

export class AttachmentService {
    static async create(data: { filepath: string , blogId: number}) {
        const blog = await blogRepository.findOne({ where: { id: data.blogId } });
        if (!blog) {
            throw new Error("Blog not found");
        }
        const attachment = new Attachment();
        attachment.path = data.filepath;
        attachment.blogId = data.blogId;  
        return await attachmentRepository.save(attachment);
    }
}
