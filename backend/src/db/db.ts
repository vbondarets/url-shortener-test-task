import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DB_NAME ? process.env.DB_NAME : 'database',
    process.env.DB_USER ? process.env.DB_USER : 'root',
    process.env.DB_PASSWORD ? process.env.DB_PASSWORD : 'root',
    {
        host: process.env.MYSQL_HOST_IP ?? (process.env.DB_HOST ?? 'localhost'),
        port: parseInt(process.env.DB_PORT as string) ?? 3306,
        dialect: 'mysql',
    }
)
