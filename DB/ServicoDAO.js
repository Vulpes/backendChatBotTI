import Servico from "../Model/Servico.js";
import conectar from "./Conexao.js";

export default class ServicoDAO{

    constructor(){
        this.init();
    }

    async init(){
        
        try{

            //criar a tabela serviço caso ela não exista
            const sql = `CREATE TABLE IF NOT EXISTS servico(
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                nome VARCHAR(100) NOT NULL,
                descricaro VARCHAR(200) NOT NULL,
                valor DECIMAL(6,2) NOT NULL,
                urlImagem VARCHAR(250) NOT NULL
                tempoInicioAtendimento INT NOT NULL,
                tempoSolucao INT NOT NULL
            )`
            const conexao = await conectar();
            await conexao.execute(sql);
            console.log("Tabela serviço iniciada com sucesso!");

        }catch (e){
            console.log("Não foi possível iniciar a tabela serviço: "+e.message);
        }

    }

    async gravar(servico){

        if (servico instanceof Servico){
            const sql = `INSERT INTO servico(nome, descricao, valor, 
                                            urlImagem, tempoInicioAtendimento, tempoSolucao)
                                VALUES(?,?,?,?,?,?)`;
            const parametros=[
                servico.nome,
                servico.descricao,
                servico.valor,
                servico.urlImage,
                servico.tempoInicioAtendimento,
                servico.tempoSolucao
            ]

            try{
                const conexao = await conectar();
                const resultado = await conexao.execute(sql, parametros);

                servico.id = resultado[0].insertId;
            }catch(e){
                console.log(e);
            }

        }

    }

    async alterar(servico){

        if (servico instanceof Servico){
            const sql = `UPDATE SET servico nome = ?, descricao = ?, valor = ?, 
                                            urlImagem = ?, tempoInicioAtendimento = ?, tempoSolucao) = ?
                                WHERE id = ?`;
            const parametros=[
                servico.nome,
                servico.descricao,
                servico.valor,
                servico.urlImage,
                servico.tempoInicioAtendimento,
                servico.tempoSolucao,
                servico.id
            ]

            try{
                const conexao = await conectar();
                const resultado = await conexao.execute(sql, parametros);

                servico.id = resultado[0].insertId;
            }catch(e){
                console.log(e);
            }

        }
    }

    async excluir(servico){

        if (servico instanceof Servico){
            const sql = `DELETE servico WHERE id = ?`;
            const parametros=[
                servico.id
            ]

            try{
                const conexao = await conectar();
                const resultado = await conexao.execute(sql, parametros);

                servico.id = resultado[0].insertId;
            }catch(e){
                console.log(e);
            }

        }

    }

    async consulta(){

        try{
            const sql = `SELECT * FROM servico ORDER BY nome`;
            const conexao = await conectar();
            const [registros, campos] = await conexao.query(sql);
            let listaServicos = [];

            for(const registro of registros){
                const servico = new Servico(registro['id'],
                                            registro['nome'],
                                            registro['descricao'],
                                            registro['valor'],
                                            registro['urlImagem'],
                                            registro['tempoInicioAtendimento'],
                                            registro['tempoSolucao']);
            }

            servico.id = resultado[0].insertId;
        }catch(e){
            console.log(e);
        }


    }

}