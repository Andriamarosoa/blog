import * as fs from 'fs';
import * as path from 'path';
import { randomUUID } from "crypto";

export class FileUtils {
  /**
   * Saves a file to the specified directory
   * @param dir - The directory where the file should be saved
   * @param filename - The name of the file
   * @param data - The file data (Buffer or string)
   * @returns A promise that resolves when the file is saved
   */
  static async saveFile(dir: string, file: Express.Multer.File): Promise<string> {
    return new Promise((resolve, reject) => {
      // Ensure directory exists
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const generatedName=this.generateRandomFileName(file.originalname);
      const filePath = path.join(dir, generatedName);
      fs.writeFile(filePath, file.buffer, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve('/uploads/'+generatedName);
        }
      });
    });
  }

  static generateRandomFileName(originalName: string): string {
    const extension = path.extname(originalName);
    const randomName = randomUUID(); // Generates a unique string
    return `${randomName}${extension}`;
  }
}