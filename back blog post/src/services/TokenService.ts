import { AppDataSource } from "../data-source";
import { Token } from "../entities/Token";
import { User } from "../entities/User";
import { randomUUID } from "crypto";
const userRepository = AppDataSource.getRepository(User);
const tokenRepository = AppDataSource.getRepository(Token);

export class TokenService {
    static async login(data: { email: string , password: string}) {
        if( !(data.email &&data.password))
            throw new Error("Mail or password could be not empty.");
            
        const user = await userRepository.findOne({ where: { email: data.email,password:data.password } });
        
        if (!user) {
            throw new Error("User not found.");
        }
        await tokenRepository.delete({userId:user.id})
        let token = new Token();
        token.userId=user.id;
        token.value=randomUUID()
        token =await tokenRepository.save(token)
        token.expiredAt=new Date(new Date(token.createdAt).getTime() +60 *60*1000)
        await tokenRepository.save(token)
        return tokenRepository.findOne({where:{...token},relations:["user"]})
    }
    static async getTokenByTokenValue(tokenValue:string) {

        return tokenRepository.findOne({where:{value:tokenValue},relations:["user"]})
    }
    
    static logout( tokenValue:string ) {
        return tokenRepository.delete({value:tokenValue})
    }
} 
