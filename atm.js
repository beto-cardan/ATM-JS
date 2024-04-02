let cash = 100;
let nome;
let key;
let escolha;
let valor;

do {
    nome = prompt("Digite seu nome: ");
    key = prompt("Digite sua Senha: ");
    
    if (nome === "Roberto" && key === "12345") {
        console.log("Welcome " + nome + "!");
        console.log("----Seu Saldo é " + cash + " R$----");
    } else {
        console.log("Dados incorretos, favor repetir a operação");
    }
} while (nome !== "Roberto" || key !== "12345");

console.log("Deseja fazer mais alguma operação?");
console.log("Digite [1] - Saques");
console.log("Digite [2] - Depósitos");
console.log("Digite [0] - Sair");

do {
    escolha = prompt("Digite aqui a opção: ");
    if (escolha === "1" && escolha !== "") {
        valor = parseInt(prompt("Valor do saque R$ : "));
        if (valor <= cash) {
            cash -= valor;
            console.log("Você sacou R$ " + valor);
            console.log("Seu novo Saldo é: " + cash + " R$");
        } else {
            console.log("Saldo insuficiente!");
        }
    } else if (escolha === "2" && escolha !== "") {
        valor = parseInt(prompt("Valor do Depósito R$: "));
        cash += valor;
        console.log("Você depositou  R$ " + valor);
        console.log("Seu novo Saldo é: " + cash + " R$");
    }
} while (escolha !== "0");

console.log("Obrigado! até a próxima! Banco Spa & CO");
