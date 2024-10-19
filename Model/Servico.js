export default class Servico{

    #id
    #nome
    #descricao
    #valor
    #urlImagem
    //SLA
    #tempoInicioAtendimento
    #tempoSolucao

    get id(){
        return this.#id;
    }

    set id(novoId){
        this.#id = novoId;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        this.#nome = novoNome;
    }

    get descricao() {
        return this.#descricao;
    }

    set descricao(value) {
        this.#descricao = value;
    }

    get valor() {
        return this.#valor;
    }

    set valor(value) {
        this.#valor = value;
    }

    get urlImage() {
        return this.#urlImagem;
    }

    set urlImage(value) {
        this.#urlImagem = value;
    }

    get tempoInicioAtendimento() {
        return this.#tempoInicioAtendimento;
    }

    set tempoInicioAtendimento(value) {
        this.#tempoInicioAtendimento = value;
    }

    get tempoSolucao() {
        return this.#tempoSolucao;
    }

    set tempoSolucao(value) {
        this.#tempoSolucao = value;
    }

    //override
    toJson(){
        return {
            id: this.#id,
            nome: this.#nome,
            descricao: this.#descricao,
            valor: this.#valor,
            urlImage: this.#urlImagem,
            tempoInicioAtendimento: this.#tempoInicioAtendimento,
            tempoSolucao: this.#tempoSolucao
        }
    }

    async gravar(){}

    async alterar(){}

    async excluir(){}

    async consulta(){}

}