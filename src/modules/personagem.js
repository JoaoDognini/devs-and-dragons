export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    tipo
    descricao

    constructor(nome) {
        this.nome = nome;
        this.#level = 1;
    }

    get level() {
        return this.#level;
    }

    set level(novoLevel) {
        if (novoLevel >= 1 && novoLevel <= 10) this.#level = novoLevel;
    }

    aumentarLevel() {
        this.level += 1;
    }

    diminuirLevel() {
        this.level -= 1;
    }

    obterInsignia() {
        return this.#level >= 5 ? `Implacável ${this.constructor.tipo}` : `${this.constructor.tipo} iniciante`;
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.#level === personagem2.#level) {
            return 'Empate'
        }

        if (personagem1.#level > personagem2.#level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
        }

        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`
    }
}