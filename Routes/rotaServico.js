import { Router } from "express";
import ServicoCtrl from "../Controller/ServicoCtrl.js";

const rotaServico = new Router();
const servCrtl = new ServicoCtrl();

rotaServico.get("/", servCrtl.consultar)
           .post("/", servCrtl.gravar)
           .put("/", servCrtl.alterar)
           .patch("/", servCrtl.alterar)
           .delete("/:id", servCrtl.excluir);

export default rotaServico;