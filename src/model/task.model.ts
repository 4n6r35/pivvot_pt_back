import { DataTypes } from "sequelize";
import { dbInstance } from "../database/config";

export const Task = dbInstance
    .define(
        "tasks",
        {
            id_task: {
                type: DataTypes.BIGINT,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            date: {
                type: DataTypes.DATE,
                allowNull: true
            },

            state: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        },
        {
            tableName: "tasks",
            timestamps: true,
        }
    );

