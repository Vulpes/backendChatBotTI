import Servico from "../Model/Servico.js";

export default class ServicoCtrl{

    //traduzir comandos http em ações negociais
    //Conceito REST
    //Considerar o protocolo HTTP

    async gravar(requisicao, resposta){
        if(requisicao.method == "POST" && requisicao.is("application/json")){
            const dados = requisicao.body;
            
            //pseudo validação
            if(dados.nome && dados.descricao && dados.valor >= 0 && dados.urlImagem && dados.tempoInicioAtendimento > 0 && dados.tempoSolicitacao > 0){

                const servico = new Servico(0, dados.nome, dados.descricao, dados.valor, dados.urlImagem, dados.tempoInicioAtendimento, dados.tempoSolicitacao);

                servico.gravar().then(() => {
                    resposta.status(201).json({
                        "status": true,
                        "mensagem": "Serviço gravado com sucesso!",
                        "id": servico.id
                    });
                }).catch((e) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Não foi possivel gravar os dados! Erro: " + e.message
                    });
                });

            }else{
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Informe todos os dados necessários conforme a documentação!"
                });
            }
        }else{
            resposta.status(405).json({
                "status": false,
                "mensagem": "Formato não permitido!"
            });
        }
    }

    async alterar(requisicao, resposta){
        if(requisicao.method == "PUT" || requisicao.method == "PATCH" && requisicao.is("application/json")){
            const dados = requisicao.body;
            
            //pseudo validação
            if(dados.id > 0, dados.nome && dados.descricao && dados.valor >= 0 && dados.urlImagem && dados.tempoInicioAtendimento > 0 && dados.tempoSolicitacao > 0){

                const servico = new Servico(dados.id, dados.nome, dados.descricao, dados.valor, dados.urlImagem, dados.tempoInicioAtendimento, dados.tempoSolicitacao);

                servico.alterar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Serviço alterado com sucesso!"
                    });
                }).catch((e) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Não foi possivel alterar os dados! Erro: " + e.message
                    });
                });

            }else{
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Informe todos os dados necessários conforme a documentação!"
                });
            }
        }else{
            resposta.status(405).json({
                "status": false,
                "mensagem": "Formato não permitido!"
            });
        }
    }

    async excluir(requisicao, resposta){
        if(requisicao.method == "DELETE" && requisicao.is("application/json")){
            const id = requisicao.params.id; //o id deve ser informado na url
            
            //pseudo validação
            if(id > 0){

                const servico = new Servico(id);

                servico.excluir().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Serviço excluido com sucesso!",
                        "id": servico.id
                    });
                }).catch((e) => {
                    resposta.status(500).json({
                        "status": false,
                        "mensagem": "Não foi possivel excluir os dados! Erro: " + e.message
                    });
                });

            }else{
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Informe todos os dados necessários conforme a documentação!"
                });
            }
        }else{
            resposta.status(405).json({
                "status": false,
                "mensagem": "Formato não permitido!"
            });
        }
    }

    async consultar(requisicao, resposta){
        if(requisicao.method == "GET"){
            
            const servico = new Servico(0);

            servico.consultar().then((listaServicos) => {
                resposta.status(201).json({
                    "status": true,
                    "servicos": listaServicos ?? "Nenhum serviço encontrado"
                });
            }).catch((e) => {
                resposta.status(500).json({
                    "status": false,
                    "mensagem": "Não foi possivel recuperar os dados! Erro: " + e.message
                });
            });

        }else{
            resposta.status(405).json({
                "status": false,
                "mensagem": "Formato não permitido!"
            });
        }
    }

}