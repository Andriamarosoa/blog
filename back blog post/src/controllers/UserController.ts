import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  static async getAll(req: Request, res: Response) {
    try {
      const filter=JSON.parse(req.query?.filter as string||'{}');
      const users = await UserService.getAllUsers(filter);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving users" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const user = await UserService.getUserById(id);
      if (!user) res.status(404).json({ message: "User not found" });
      else res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving user" });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const updatedUser = await UserService.updateUser(id,req.body);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      await UserService.deleteUser(id);
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}
