import {Request, Response} from 'express';
import Tarea from '../models/tareaModel';

export const getTareas = async (req: Request, res: Response) => {
    const listTareas = await Tarea.findAll();
    res.json(listTareas);
}

export const getTarea = async (req: Request, res: Response) => {
    const {id} = req.params;
    const tarea = await Tarea.findByPk(id);

    if (tarea) {
        res.json(tarea)
    }else{
        res.status(404).json({
            msg: `No existe una tarea con ese ${id}`
        })
    }
}

export const deleteTarea = async (req: Request, res: Response) => {
    const {id} = req.params;
    const tarea = await Tarea.findByPk(id);
    if (!tarea) {
        res.status(404).json({
            msg: `No existe una tarea con ese ${id}`
        })
    }else{
        await Tarea.destroy();
        res.json({
            msg: `La tarea fue eliminada con exito`
        })
    }
}
export const postTarea =  async (req: Request, res: Response) => {
    const {body} = req;
    try{
        await Tarea.create(body);
        res.json({
            msg: '!La tarea fue agregada con exito!'
        })
    }catch (error){
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`

        })
    }
}
export const updateTarea =  async (req: Request, res: Response) => {
    const {body} = req;
    const {id} = req.params;
    try{
        const tarea = await Tarea.findByPk(id);
        if(tarea){
            await tarea.update(body);
            res.json({
                msg: '!La tarea fue actualizada con exito!'
            })
        }else{
            res.status(404).json({
                msg: `No existe una tarea con ese ${id}`
            })
        }
        
    }catch (error){
    console.log(error);
    res.json({
        msg: `Upps ocurrio un error, comuniquese con soporte`

        })
    }
}



