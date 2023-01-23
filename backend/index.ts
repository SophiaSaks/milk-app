import express from 'express';
import results from './milk.json';
import cors from 'cors';
const app: express.Application = express();

app.use(cors()); 
app.use(express.json());

const port: number = 3001;
 
app.get('/', (_req, _res) => {
    _res.send(results);
});
 
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});