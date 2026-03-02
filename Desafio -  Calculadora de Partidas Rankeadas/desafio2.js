// 1️⃣ Função: Criada para calcular o saldo e retornar o nível
function calcularNivel(vitorias, derrotas) {
    // 2️⃣ Operadores: Calculando o saldo
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // 3️⃣ Estruturas de decisão: Classificando o nível com base nas VITÓRIAS
    if (vitorias <= 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Retornando um objeto com os dois valores para a variável que chamar a função
    return { saldoVitorias, nivel };
}

// 4️⃣ Variáveis e Laços de Repetição: Testando vários jogadores
const jogadores = [
    { v: 7, d: 2 },    // Ferro
    { v: 15, d: 5 },   // Bronze
    { v: 45, d: 10 },  // Prata
    { v: 75, d: 20 },  // Ouro
    { v: 85, d: 5 },   // Diamante
    { v: 95, d: 3 },   // Lendário
    { v: 120, d: 10 }  // Imortal
];

for (let i = 0; i < jogadores.length; i++) {
    // 5️⃣ Chamada da função e armazenamento do resultado em uma variável
    let resultado = calcularNivel(jogadores[i].v, jogadores[i].d);

    // 6️⃣ Saída formatada
    console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
}