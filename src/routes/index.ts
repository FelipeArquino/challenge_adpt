import { Application, Router } from "express";
import { cookiesRouter } from "./cookies";


export const useRoutes = (app: Application) => {
    const apiRouter = Router();
    apiRouter.use('/cookies', cookiesRouter);

    app.use('/api/v1', apiRouter);
}