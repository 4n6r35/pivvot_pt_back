import { DataTypes } from "sequelize";
import { dbInstance } from "../database/config.js";

export const Task = dbInstance
    .define(
        "tasks",
        {
            id_task: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            title: DataTypes.BIGINT,
            description: DataTypes.BIGINT,
            date: DataTypes.DATE,
            state:{
                type:DataTypes.BOOLEAN,
                defaultValue: true
            } 
        },
        {
            tableName: "tasks",
            timestamps: true,
        }
    );

