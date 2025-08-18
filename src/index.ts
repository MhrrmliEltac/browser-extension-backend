import express from "express";
import { Express } from "express";
import extensionRoutes from "../routes/extension.ts";

const app: Express = express();

app.use(express.json());

app.use("/extension", extensionRoutes);

app.listen(5000, () => {
  console.log("Server çalışır http://localhost:5000");
});
