import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root", // Mets ton utilisateur MySQL
  password: "root", // Mets ton mot de passe
  database: "blog_db",
  entities: ["src/entities/*.ts"], // Dossier où sont stockées tes entités
  synchronize: true, // Synchronise la BDD à chaque démarrage (Désactive en prod)
  charset: 'utf8mb4',
  //logging: true,
});
