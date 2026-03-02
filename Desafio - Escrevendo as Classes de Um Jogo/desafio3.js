// 1️⃣ Criando a Classe Genérica para o Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // 2️⃣ Método para definir a lógica do ataque
    atacar() {
        let ataque = "";

        // 3️⃣ Estrutura de Decisão para definir o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque genérico";
        }

        // 4️⃣ Saída: Exibindo a mensagem formatada
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// 5️⃣ Laço de Repetição e Funções: Testando múltiplos heróis
const jornada = [
    new Heroi("Gandalf", 1000, "mago"),
    new Heroi("Aragorn", 87, "guerreiro"),
    new Heroi("Lee", 30, "monge"),
    new Heroi("Hanzo", 25, "ninja")
];

// Percorrendo a lista de heróis e chamando o método atacar
jornada.forEach(heroi => heroi.atacar());