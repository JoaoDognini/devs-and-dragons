import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    static tipo = 'Guerreiro';
    static descricao = 'Você será esmagado pela fúria do Guerreiro!'
    forca;

    constructor (nome, forca) {
        super(nome);
        this.forca = forca;
    }

    obterInsignia() {
        return this.level >= 7 && this.forca >= 5 ? 'Guerreiro furioso' : super.obterInsignia();
    }
}