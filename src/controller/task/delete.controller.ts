
import { Request, Response } from "express";
import { dbInstance } from "../../database/config";
import { Task } from "../../model/index";


export const deleteTaskController = async (req: Request, res: Response) => {
    const { id_task } = req.body
    const transaction = await dbInstance.transaction();
    await Task.update({ state: false }, {
        where: {
            id_task: id_task
        },
        transaction: transaction
    })

    transaction.commit();
    return res.status(200).json({
        ok: true,
        message: "Task eliminada exitosamente"
    })
}