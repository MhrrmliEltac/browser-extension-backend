import express from "express";
import extensionRoutes from "../routes/extension";
const app = express();
app.use(express.json());
app.use("/extension", extensionRoutes);
app.listen(3000, () => {
  console.log("Server çalışır http://localhost:3000");
});
//# sourceMappingURL=index.js.map
