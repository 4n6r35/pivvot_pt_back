import { Request, Response } from "express"
import { Task } from "../../model/index"

export const listTaskController = async (req: Request, res: Response) => {
    const { page, size } = req.query as any
    try {

        const { rows, count } = await Task.findAndCountAll({
            where: {
                state: true
            },
            offset: Number(page - 1),
            limit: Number(size)
        })

        return res.status(200).json({
            ok: true,
            message: "descuentos obtenidos exitosamente",
            data: {
                total_tasks: count,
                rows// dataRes
            }
        })
    } catch (error) {
        console.log(error)
    }
}