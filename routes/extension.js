import { Router } from "express";
import { createExtension } from "../controller/extension";
const router = Router();
router.post("/create", createExtension);
export default router;
//# sourceMappingURL=extension.js.map