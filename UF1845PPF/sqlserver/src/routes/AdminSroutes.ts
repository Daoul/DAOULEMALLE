import { Router } from "express";
import { getAdminservices, getAdminservice, deleteAdminservice, postAdminservice, updateAdminservice } from "../controllers/AdminSController";

const adminSrouter = Router();
adminSrouter.get('/adminservices/', getAdminservices);
adminSrouter.get('/adminservices/:id', getAdminservice);
adminSrouter.delete('/adminservices/:id', deleteAdminservice);
adminSrouter.post('/adminservices/', postAdminservice);
adminSrouter.put('/adminservices/:id', updateAdminservice);

export default adminSrouter;