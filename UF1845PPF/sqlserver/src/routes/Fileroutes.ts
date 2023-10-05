import { Router } from "express";
import { getFile, postFile } from "../controllers/FileController";

const routerfile = Router();
routerfile.get('/files/', getFile);
routerfile.post('/files/', postFile);

export default routerfile;