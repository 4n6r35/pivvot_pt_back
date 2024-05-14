import { Router } from "express";
import { createTaskController, deleteTaskController, listTaskController, updateTaskList } from "../controller/index";
import { getByIdTaskController } from "../controller/task/getById.controller";


const taskRouter = Router();

taskRouter.post('/create', createTaskController)

taskRouter.get('/list', listTaskController)

taskRouter.post('/by-id', getByIdTaskController)

taskRouter.post('/update', updateTaskList)

taskRouter.post('/delete', deleteTaskController)

export {
    taskRouter
}