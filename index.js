import express, { response } from 'express';
import rotaServico from './Routes/rotaServico.js';

const app = express();

const host = "localhost";
const porta = "3000";

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/servico", rotaServico);

app.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`)
});

