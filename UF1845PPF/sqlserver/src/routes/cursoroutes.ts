import { Router } from "express";
import { getCursos, getCurso, deleteCurso, postCusro, updateCusro } from "../controllers/cursoController";

const routercurso = Router();
routercurso.get('/cursos/', getCursos);
routercurso.get('/cursos/:id', getCurso);
routercurso.delete('/cursos/:id', deleteCurso);
routercurso.post('/cursos/', postCusro);
routercurso.put('/cursos/:id', updateCusro);

export default routercurso;