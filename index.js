// Variáveis
let balance = 0; // Inicializa a variável balance (saldo) com valor zero

// Laço de repetição e Operadores
for(let victory = 3; victory < 110; victory += 10) { // Inicia um loop que começa em 3 e incrementa 10 até 110
    balance = balanceVictoryDefeat(victory, 2); // Atualiza o saldo chamando a função balanceVictoryDefeat com vitórias e derrotas
    // Saída
    console.log(`O Herói tem de saldo ${balance} e está no nível ${getLevel(balance)}`); // Exibe o saldo e o nível correspondente
} 

// Funções
function balanceVictoryDefeat(v, d) { // Define a função que calcula o saldo a partir de vitórias e derrotas
    return v - d; // Retorna o saldo calculado subtraindo derrotas de vitórias
}

function getLevel(b) { // Define a função que determina o nível com base no saldo
    // Estruturas de decisões
    if(b <= 10) // Verifica se o saldo é menor ou igual a 10
        return "Ferro"; // Retorna "Ferro" se a condição for verdadeira
    if(b <= 20) // Verifica se o saldo é menor ou igual a 20
        return "Bronze"; // Retorna "Bronze" se a condição for verdadeira
    if(b <= 50) // Verifica se o saldo é menor ou igual a 50
        return "Prata"; // Retorna "Prata" se a condição for verdadeira
    if(b <= 80) // Verifica se o saldo é menor ou igual a 80
        return "Ouro"; // Retorna "Ouro" se a condição for verdadeira
    if(b <= 90) // Verifica se o saldo é menor ou igual a 90
        return "Diamante"; // Retorna "Diamante" se a condição for verdadeira
    if(b <= 100) // Verifica se o saldo é menor ou igual a 100
        return "Lendário"; // Retorna "Lendário" se a condição for verdadeira
    return "Imortal"; // Se nenhuma condição anterior for verdadeira, retorna "Imortal"
}
