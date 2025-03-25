import { AppDataSource } from "../data-source";
import { Blog } from "../entities/Blog";
import { User } from "../entities/User";

const blogRepository = AppDataSource.getRepository(Blog);
const userRepository = AppDataSource.getRepository(User);

export class BlogService {
    static async getAll(filter:any) {
        filter={...filter,relations:filter.relations||["user","attachments"]}
        const data=await blogRepository.find(filter)
        const count=await blogRepository.count(filter)
        return {data,metadata:{count}};
    }

    static async getById(id: number) {
        return await blogRepository.findOne({ where: { id } ,relations:["user","attachments"]});
    }

    static async create(data: { title: string; content: string , userId: number,id:number}) {
        const user = await userRepository.findOne({ where: { id: data.userId } });
        if (!user) {
            throw new Error("User not found");
        }
    
        const newPost = blogRepository.create(data);
        newPost.id=data.id
        if(newPost.id){
            await blogRepository.update({id:newPost.id},newPost);
            return newPost
        }

        return await blogRepository.save(newPost);
        
        
    }

    static async update(id: number, data: { title?: string; content?: string }) {
        await blogRepository.update(id, data);
        return await blogRepository.findOne({ where: { id } });
    }

    static async delete(id: number) {
        return await blogRepository.delete(id);
    }
}
