import express, { Application } from 'express';
// import cors from 'cors';
import dotenv from 'dotenv'
import 'dotenv/config';
// import bodyParser from 'body-parser';
// import { AppRouter } from './routes/index.ts';
// import errorHandler from './middleware/ErrorHandler.js';
import dbInit from './db/init.js';
import createServer from './utils/server.js';


dotenv.config()

const PORT = process.env.PORT ? process.env.PORT : 5000;
const HOST = process.env.HOST ? process.env.HOST : 'localhost';

const app: Application = createServer();
// const router = new AppRouter(app);

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// router.init();
// app.use(errorHandler);

const start = async (): Promise<void> => {
    try {
        await dbInit()
        app.listen(PORT, () => console.log(`Server start on http://${HOST}:${PORT}`));
    }
    catch (err) {
        console.log("Error: " + err);
    }
}
start();