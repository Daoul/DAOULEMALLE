import { Router } from "express";
import { getUsuarios, getUsuario, deleteUsuario, postUsuario, updateUsuario } from "../controllers/usuarioController";

const routerusario = Router();
routerusario.get('/usuarios/', getUsuarios);
routerusario.get('/usuarios/:id', getUsuario);
routerusario.delete('/usuarios/:id', deleteUsuario);
routerusario.post('/usuarios/', postUsuario);
routerusario.put('/usuarios/:id', updateUsuario);

export default routerusario;