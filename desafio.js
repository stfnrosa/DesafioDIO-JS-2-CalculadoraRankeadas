//inicio e apresentação
console.log("Seja bem vindo bravo herói! Os dados mágicos de doze lados serão rodados duas vezes, o primeiro representará suas vitórias, enquanto que o segundo suas derrotas o resultado entre os dois irá nos dizer o rendimento e qual será seu nível de herói. Boa Sorte!")
//retorna um número aleatório entre 1 e 12, representando um dado de 12 lados
function rodarOsDados(){
    let oDado = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12]
    let nDado = Math.floor(Math.random() * oDado.length)
    return oDado[nDado]
} 
//primeiro dado 
console.log("Primeiro dado mágico será rodado...")
let primeiro = rodarOsDados() //função retorna número aleatório
console.log("Você tirou um " + primeiro)
let vitorias = primeiro * 10
//segundo dado
console.log("Segundo dado será rodado...")
let segundo = rodarOsDados() //função retorna número aleatório
console.log("Você tirou um " + segundo)
let derrotas = segundo * 10
//função que calcula o rendimento do herói
function calculadoraRank (vitorias, derrotas){
    let rendimento = vitorias - derrotas
	return rendimento
} 
let saldoVitorias = calculadoraRank(vitorias, derrotas)
//classificação de rank 
if(saldoVitorias <= 10){
    nivel= "Ferro"
}
else if (saldoVitorias >= 11 && saldoVitorias<= 20){
    nivel = "Bronze"
}
else if (saldoVitorias >= 21 && saldoVitorias <=50 ){
    nivel = "Prata"
}
else if (saldoVitorias >= 51 && saldoVitorias <=80 ){
    nivel = "Ouro"
}
else if (saldoVitorias >= 81 && saldoVitorias <=90 ){
    nivel = "Diamante"
}
else if (saldoVitorias >= 91 && saldoVitorias <=100 ){
    nivel = "Lendário"
}
else{
    nivel = "Imortal"
}
//saida 
console.log (`O herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`)