// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada


class ClasseDoHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = "";
    }

    atacar() {
        switch (this.tipo) {
            case "mago":
                this.ataque = "usou magia";
                break;
            case "guerreiro":
                this.ataque = "usou espada";
                break;
            case "monge":
                this.ataque = "usou artes marciais";
                break;
            case "ninja":
                this.ataque = "usou shuriken";
                break;
            default:
                this.ataque = "ataque não definido";
        }

        console.log(`O ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let guerreiro = new ClasseDoHeroi("Aleister", "19", "guerreiro");
guerreiro.atacar();

let mago = new ClasseDoHeroi("Gandalf", "660", "mago");
mago.atacar();

let monge = new ClasseDoHeroi("Aang", "12", "monge");
monge.atacar();

let ninja = new ClasseDoHeroi("Po", "20", "ninja");
ninja.atacar();