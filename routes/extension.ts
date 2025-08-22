import { Router } from "express";
import {
  createExtension,
  deleteExtension,
  getExtension,
  updateActiveExtension,
  updateExtension,
} from "../controller/extension.ts";
import { upload } from "../upload/multer.ts";

const router: Router = Router();

router.get("/", getExtension);
router.post("/create", upload.single("image"), createExtension);
router.put("/:id", updateExtension);
router.put("/:id/active", updateActiveExtension);
router.delete("/:id", deleteExtension);

export default router;
