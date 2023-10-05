import { Router } from "express";
import { postFile  } from "../controllers/FileController";

const router = Router();
router.post('/', postFile);

export default router;