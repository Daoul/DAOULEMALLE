import { Router } from "express";
import { getUsuarios, getUsuario, deleteUsuario, postUsuario, updateUsuario } from "../controllers/usuarioController";
import validateToken from '../services/validate-token';


const router = Router();
router.get('/', validateToken, getUsuarios);
router.get('/:id', validateToken, getUsuario);
router.delete('/:id', validateToken, deleteUsuario);
router.post('/', validateToken, postUsuario);
router.put('/:id', validateToken, updateUsuario);

export default router;