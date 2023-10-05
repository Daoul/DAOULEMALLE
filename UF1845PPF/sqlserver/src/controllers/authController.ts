import { Request, Response } from "express";
import { registroNuevoUser, accesoUser } from "../services/authService";

const registroCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registroNuevoUser(body)
    res.send(responseUser)

}
const accesoCtrl = async ({body}: Request, res: Response) => {
    const { email, password}= body
    const responseUser =  await accesoUser(body)
    res.send(responseUser)
    
}