import { Router } from "express";
import { createTaskController, deleteTaskController, listTaskController, updateTaskList } from "../controller/index";


const taskRouter = Router();

taskRouter.post('/create', createTaskController)

taskRouter.get('/list', listTaskController)

taskRouter.post('/update', updateTaskList)

taskRouter.post('/delete', deleteTaskController)

export {
    taskRouter
}