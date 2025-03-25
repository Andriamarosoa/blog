import { Request, Response } from "express";
import { TokenService } from "../services/TokenService";

export class TokenController {
  static async login(req: Request, res: Response) {
    try {
      
      const {email,password}=req.body
      const token=await TokenService.login({email,password});
      res.status(200).json(token);
    } catch (error:any) {
      res.status(500).json({ message: error.message|| "Authentication failed" });
    }
  }
  static async test(req: Request, res: Response) {
    try {
      const {tokenValue}=req.params
      const token=await TokenService.getTokenByTokenValue(tokenValue);
      res.status(200).json(token);
    } catch (error) {
      res.status(500).json({ message: "Authentication failed" });
    }
  }
  static async logout(req: Request, res: Response) {
    try {
      const {tokenValue}=req.params
      const token=await TokenService.logout(tokenValue);
      res.status(200).json(token);
    } catch (error) {
      res.status(500).json({ message: "Error logout" });
    }
  }
  
  
}
