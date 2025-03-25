import { AppDataSource } from "../data-source";
import { User } from "../entities/User";

const userRepository = AppDataSource.getRepository(User);

export class UserService {
    static async getAllUsers(filter:any) { 
        const data=await userRepository.find(filter)
        const count=await userRepository.count(filter)
        return {data,metadata:{count}}; 
    }

    static async getUserById(id: number) {
        return await userRepository.findOne({ where: { id } });
    }

    static async createUser(data: { name: string, email: string, password: string }) {
        const user = new User();
        user.name = data.name;
        user.email = data.email;
        user.password=data.password;
        return await userRepository.save(user);
    }

    static async updateUser(id: number, data: { name: string, email: string }) {
        const user = await this.getUserById(id);
        if (!user) throw new Error("User not found");

        user.name = data.name;
        user.email = data.email;
        return await userRepository.save(user);
    }

    static async deleteUser(id: number) {
        const user = await this.getUserById(id);
        if (!user) throw new Error("User not found");

        return await userRepository.remove(user);
    }
}
