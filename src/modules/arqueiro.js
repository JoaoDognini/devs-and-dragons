import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    destreza;
    static tipo =  'Arqueiro';
    static descricao = 'Você tem o meu arco!';

    constructor(nome, destreza) {
        super(nome);
        this.destreza = destreza;
    }

    obterInsignia() {
        return this.destreza >= 5 ? `Dominador de flechas` : super.obterInsignia();
    }
}