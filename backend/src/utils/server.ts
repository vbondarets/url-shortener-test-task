import bodyParser from 'body-parser';
import express, { Application } from 'express';
import cors from 'cors';
import ErrorHandler from '../middleware/ErrorHandler.js';
import { AppRouter } from '../routes/index.js';

function createServer() {
    const app: Application = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(ErrorHandler);
    const router = new AppRouter(app);
    router.init();
    return app;
}

export default createServer