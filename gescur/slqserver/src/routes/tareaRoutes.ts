import { Router } from "express";
import { getTareas, getTarea, deleteTarea, postTarea, updateTarea } from "../controllers/tareaController";
import validateToken from '../services/validate-token';

const router = Router();
router.get('/', validateToken,getTareas);
router.get('/:id', validateToken, getTarea);
router.delete('/:id', validateToken, deleteTarea);
router.post('/', validateToken, postTarea);
router.put('/:id', validateToken, updateTarea);

export default router;