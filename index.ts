import express, { Express, Request, Response } from "express";
import elering from "./Controller/nodrpool"
import cors from "cors";

const app: Express = express();

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', elering)

app.listen(3000,() => {
  console.log(`[server]: Server is running at http://localhost:3000`);
});