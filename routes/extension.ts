import { Router } from "express";
import {
  createExtension,
  deleteExtension,
  getExtension,
  updateExtension,
} from "../controller/extension.ts";
import { upload } from "../upload/multer.ts";

const router: Router = Router();

router.get("/", getExtension);
router.post("/create", upload.single("image"), createExtension);
router.put("/:id", updateExtension);
router.delete("/:id", deleteExtension);

export default router;
