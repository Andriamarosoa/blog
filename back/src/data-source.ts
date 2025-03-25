import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config()


const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = process.env.DB_PORT!;


export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port:+DB_PORT,
  username: DB_USER, // Mets ton utilisateur MySQL
  password: DB_PASSWORD, // Mets ton mot de passe
  database: "blog_db",
  entities: ["src/entities/*.ts"], // Dossier où sont stockées tes entités
  synchronize: true, // Synchronise la BDD à chaque démarrage (Désactive en prod)
  charset: 'utf8mb4',
  //logging: true,
});
