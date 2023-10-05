import { Router } from "express";
import { getTareas, getTarea, deleteTarea, postTarea, updateTarea } from "../controllers/tareaController";

const routertarea = Router();
routertarea.get('/tareas', getTareas);
routertarea.get('/tareas/:id', getTarea);
routertarea.delete('/tareas/:id', deleteTarea);
routertarea.post('tareas/', postTarea);
routertarea.put('/tareas/:id', updateTarea);

export default routertarea;