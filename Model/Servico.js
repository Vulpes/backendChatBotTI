import ServicoDAO from "../DB/ServicoDAO.js"

export default class Servico{

    #id
    #nome
    #descricao
    #valor
    #urlImagem
    //SLA
    #tempoInicioAtendimento
    #tempoSolucao

    constructor(id = 0, nome, descricao, valor=0, urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lRbS7eKYzDq-Ftxc1p8G_TTw2unWBMEYUw&s", tempoInicioAtendimento=4, tempoSolucao=24){
        this.#id = id;
        this.#nome = nome;
        this.#descricao = descricao;
        this.#valor = valor;
        this.#urlImagem = urlImage;
        this.#tempoInicioAtendimento = tempoInicioAtendimento;
        this.#tempoSolucao = tempoSolucao;
    }

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

    async gravar(){
        const servDAO = new ServicoDAO();
        await servDAO.gravar(this);
    }

    async alterar(){
        const servDAO = new ServicoDAO();
        await servDAO.alterar(this);
    }

    async excluir(){
        const servDAO = new ServicoDAO();
        await servDAO.excluir(this);
    }

    async consultar(){
        const servDAO = new ServicoDAO();
        return await servDAO.consultar();
    }

}