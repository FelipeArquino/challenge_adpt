import express, { Request, Response } from 'express';
import "reflect-metadata";
import { useRoutes } from './routes';
import bodyParser from 'body-parser';


const PORT = 8091;
const app = express();
app.use(bodyParser.json())
useRoutes(app);

app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'ok'
    })
});

app.listen(PORT, () => console.log('Server iniciado na porta ' + PORT));