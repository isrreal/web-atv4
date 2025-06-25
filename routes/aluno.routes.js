const express = require('express');
const AlunoService = require("../services/aluno.service");
const router = express.Router();

router.get("/listar", (request, response) => {
    response.json(AlunoService.listar());
});

router.get("/gerar-tabela", (request, response) => {
    response.json(AlunoService.gerarTabela());
});

router.post("/criar", (request, response) => {
    const novoAluno = AlunoService.criar(request.body);
    response.json(novoAluno);
});

router.put("/editar/:id", (request, response) => {
    const { id } = request.params;
    const atualizado = AlunoService.editar(id, request.body);
    response.json(atualizado);
});

router.delete("/apagar/:id", (request, response) => {
    const { id } = request.params;
    const apagado = AlunoService.apagar(id);
    response.json(apagado);
});

module.exports = router;
