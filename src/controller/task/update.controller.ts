import { Request, Response } from "express"
import { dbInstance } from "../../database/config"
import { Task } from "../../model/index"


export const updateTaskList = async (req: Request, res: Response) => {
    const { ...data } = req.body
    const transaction = await dbInstance.transaction()
    try {
        await Task.update(data, {
            where: {
                id_task: data.id_task
            },
            transaction: transaction
        });

        transaction.commit();
        return res.status(200).json({
            menssage: "Task actualizada exitosamente",
        })
    } catch (error) {
        transaction.rollback()
        return res.status(500).json({
            message: "Ha ocurrido un error al actualizar la task",
            err: error
        })
    }
}