// 1️⃣ Variáveis: Criando uma lista de objetos para heróis
const herois = [
    { nome: "Pedro", xp: 950 },
    { nome: "Vânia", xp: 1500 },
    { nome: "Tiago", xp: 4500 },
    { nome: "Mateus", xp: 6200 },
    { nome: "Ana", xp: 7500 },
    { nome: "Julia", xp: 8800 },
    { nome: "Luciana", xp: 9500 },
    { nome: "Alexandre Chagas", xp: 12000 }
];

// 2️⃣ Laço de repetição: Percorrendo cada herói da lista
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // 3️⃣ Estrutura de decisão & Operadores: Classificando o nível
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // 4️⃣ Saída: Exibindo a mensagem final
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}