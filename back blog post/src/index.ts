import express from "express";
import cors from "cors";
import BlogRoutes from "./routes/BlogRoutes";
import UserRoutes from "./routes/UserRoutes";
import TokenRoutes from "./routes/TokenRoutes";
import { AppDataSource } from "./data-source";
import path from "path";

const app = express();
app.use(express.json());
app.use(cors());
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Connected to MySQL");
  })
  .catch((error) => console.error("❌ Error connecting to MySQL:", error));

app.use("/blog", BlogRoutes);
app.use("/user", UserRoutes);
app.use("/auth", TokenRoutes);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
