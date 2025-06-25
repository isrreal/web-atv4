const AlunoModel = require("../models/aluno.model")
const alunos = require("../data/alunos")

class AlunoService {
    static listar() {
        return alunos
    }

    static criar(alunoJson) {
        const novoAluno = new AlunoModel(
            ++id,
            alunoJson.nome,
            alunoJson.curso,
            alunoJson.IRA
        )

        alunos.push(novoAluno)
        return novoAluno
    }

    static recuperar(id) {
        for (let i = 0; i < alunos.length; ++i) {
            if (alunos[i].id == id) {
                return alunos[i]
            }
        }
        return null
    }

       static editar(id, aluno) {
        for(let i = 0; i < alunos.length; ++i) {
            if(alunos[i].id == id) {
                alunos[i].nome = aluno.nome
                alunos[i].curso = aluno.curso
                alunos[i].IRA = aluno.IRA
                return alunos[i]
            }
        }
        return null
    }

    static apagar(id) {
        for(let i = 0; i < alunos.length; ++i){
            if(alunos[i].id == id){
                alunos.splice(i, 1)
                return true
            } 
        }
        return false
    }
}

module.exports = AlunoService

