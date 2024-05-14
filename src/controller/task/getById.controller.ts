import { Request, Response } from "express"
import { Task } from "../../model/index"

export const getByIdTaskController = async (req: Request, res: Response) => {
    const { id_task } = req.body
    try {
        const task = await Task.findOne({
            where: {
                id_task: id_task,
                state: true
            }
        })

        return res.status(200).json({
            ok: true,
            message: "Tareas obtenidas exitosamente",
            task
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Error al obtener las tareas"
        });
    }
}
