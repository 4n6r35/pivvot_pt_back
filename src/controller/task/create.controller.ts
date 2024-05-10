import { Request, Response } from "express";
import { dbInstance } from "../../database/config";
import { Task } from "../../model/index"

export const createTaskController = async (req: Request, res: Response) => {
    const { ...data } = req.body
    const transaction = await dbInstance.transaction();
    try {
        const newTask = await Task.create(data, {
            transaction
        })
        transaction.commit()
        return res.status(200).json({
            ok: true,
            message: "Tarea creada exitosamente",
            data: newTask
        })
    } catch (error) {
        transaction.rollback();
        return res.status(500).json({
            ok: true,
            message: "Se ha producido un error al momento de agregar la nueva task"
        })

    }
}