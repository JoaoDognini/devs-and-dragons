import { PersonagemView } from "./components/personagem-view.js"
import { Mago } from "./modules/mago.js"
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magoAntonio = new Mago('Antonio', '', 'Fogo', 4, 3);
const magaJulia = new Mago('Julia', '', 'Gelo', 7, 10);
const arqueiroRobin = new Arqueiro('João', '', 6);
const arqueiroKlebe = new Arqueiro('Klebe', '', 4);
const arqueiroMagoChico = new ArqueiroMago('Chico', '', 10, 'Ar', 4, 8);
const guerreiroJoao = new Guerreiro('João', 8)

const personagens = [magoAntonio, magaJulia, arqueiroRobin, arqueiroKlebe, arqueiroMagoChico, guerreiroJoao]

new PersonagemView(personagens).render()