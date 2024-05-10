import { dbInstance } from "../../database/config.js"
import { Task } from "../../model/index.js";


export const deleteTaskController = async (req, res) => {
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