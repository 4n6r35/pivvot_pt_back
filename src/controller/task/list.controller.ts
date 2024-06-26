import { Request, Response } from "express"
import { Task } from "../../model/index"

export const listTaskController = async (req: Request, res: Response) => {
    try {
        const { rows, count } = await Task.findAndCountAll({
            where: {
                state: true
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })

        return res.status(200).json({
            ok: true,
            message: "Tareas obtenidas exitosamente",
            data: {
                total_tasks: count,
                rows
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: "Error al obtener las tareas"
        });
    }
}
