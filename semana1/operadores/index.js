                            //INICIO AULA OPERADORES E LÓGICA DE PROGRAMAÇÃO 

//             ------------------------------->EXEMPLOS<---------------------------------
/*
console.log('Olá,Molina!')
//Soma
const primeiroValor = 10
const segundoValor  = 20
const terceiroValor = 40
const quartoValor   = 80

let resultado

resultado = primeiroValor + segundoValor //30
console.log('Soma',resultado)
//subtração
resultado = terceiroValor - segundoValor
console.log('Subtração',resultado)

//Multiplicação
resultado = segundoValor *  primeiroValor
console.log('Multiplicação',resultado)

//Divisão
resultado = quartoValor / terceiroValor
console.log('Divisão',resultado)

resultado = 17 % 6
console.log('Resto',resultado)

let saldo = 100
const deposito = 200

saldo = saldo +deposito
saldo -= 150

console.log('Saldo',saldo)

//COMPARADORES
const saoiguais =  30 === 25
const saoiguais2 = 'Bruno' === 'bruno'
console.log('São iguais?',saoiguais2)
console.log('São iguais?', saoiguais)

const saoDiferentes = '2' !== 2
console.log('São diferentes?',saoDiferentes)

console.log('O primeiro número é maior?', 5 > 4)
console.log('O primeiro número é maior?', 5 > 5)
console.log('O primeiro número é maior?', 5 >= 4)

console.log('O primeiro número é menor?', 4 < 3)//false
console.log('O primeiro número é menor?', 4 < 4)//false
console.log('O primeiro número é menor?', 4 <= 4)//true
*/
//             ------------------------------->EXERCICIO 1<---------------------------------
/*a- Somar 3 com  4
let num1 = 3
let num2 = 4
let num3 = 5
console.log('A soma é',num1 + num2)//soma
console.log('A multiplicação é',(num1 * num3)/2)//multiplicação
console.log('A subtração é', (num2 - num3)*-1)//subtração
console.log('O resto da divisão é',234 % 5)//resto da divisão


//OPERADORES LÓGICOS

const fazSol = true
const estaCalor = true
const temPraia = false

let vouParaPraia = fazSol && estaCalor && temPraia
console.log('Vou para a praia?', vouParaPraia)// se e somente se  ambas afirmações forem verdadeiras

const estouComFome = true
const estouEmCasa = true
const estouTriste = true

let comerChocolate = estouComFome || estouEmCasa || estouTriste

console.log('Vou comer chocolate?',comerChocolate)// o resultado será falso se e somente todos os valores forem false


//             ------------------------------->EXERCICIO 2<---------------------------------

//1
let num1 = 10
let num2 = 20

console.log('O primeiro número é igual ao segundo?',num1 === num2)
console.log('O primeiro número é diferente do segundo?',num1 !== num2)
console.log('O primeiro número é maior que o segundo?',num1 > num2)
console.log('O primeiro número é menor que o segundo?',num1 < num2)
//             ------------------------------->EXERCICIO 3<---------------------------------
const a = true
const b = false
const c = true

console.log('Operação 1 a && b',a && b)
console.log('Operação 2 b && c',b && c)
console.log('Operação 3 a && c',a && c)
console.log('Operação 4 a && b && c', a && b && c)
//             ------------------------------->EXERCICIO 4<---------------------------------


console.log('Operação 1 a || b',a || b)//true
console.log('Operação 2 b || c',b || c)//true
console.log('Operação 3 a || c',a || c)//true
console.log('Operação 4 a || b || c', a || b || c)//true

//             ------------------------------->EXERCICIO 5<---------------------------------

const nome = prompt("Qual é o seu nome?")
const anoNascimento = Number(prompt("Em qual ano você nasceu?"))
const anoAtual = Number(prompt("Em que ano estamos?"))


console.log(`Olá, ${nome}`)
console.log(`Idade:${anoAtual - anoNascimento}`)
console.log(`É maior de idade?:${anoAtual - anoNascimento >= 18}`)
console.log(`Idade em 2050:${2050 - anoNascimento}`)
*/