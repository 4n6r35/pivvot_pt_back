import { Task } from "../../model/index.js"


export const listTaskController = async (req, res) => {
    const { page, size } = req.query
    try {

        const { rows, count } = await Task.findAndCountAll({
            where: {
                state: true
            },
            offset: Number(page - 1),
            limit: Number(size)
        })

        const dataRes = rows.map(x => {
            return {
                id_task: x.id_task,
                title: x.title,
                description: x.description,
                date: x.date
            }
        })

        return res.status(200).json({
            ok: true,
            message: "descuentos obtenidos exitosamente",
            data: {
                total_tasks: count,
                dataRes
            }
        })
    } catch (error) {
        console.log(error)
    }
}