//PRATICANDO
//console.log('Oi mundo')
//console.log("Oi mundo")
//console.log(`Oi Mundo`)


//const nome ="bruno"
//const idade = 35
//console.log("Oi eu sou  o", nome )
//const fraseComVirgula= "Oi eu sou o "+ nome + " e eu tenho " + idade + "anos"

//console.log(fraseComVirgula)

//const fraseComTemplateString = `Oi, eu sou  o ${nome} e tenho ${idade} anos`

//console.log(fraseComTemplateString)
//----------------------EXERCICIO 1-------------------------------
/*const meuNOme = prompt("Qual é o seu nome?")
const corFavorita = prompt("Qual é a sua cor favorita?")

const fraseComAspas = "A cor favorita de " + meuNOme + " é " + corFavorita

const fraseComTemplate = `A cor favorita de ${meuNOme} é ${corFavorita}`

console.log(fraseComAspas)
console.log(fraseComTemplate)
*/
//PRATICANDO

//const  string= prompt("informe uma string")
//console.log("A string informada é:", string)
//console.log(`A string informada possui tamanho : ${string.length}`)

//const userName = prompt("Digite o seu nome")
//console.log('Nome informado', userName)
//console.log('Nome em caixa baixa', userName.toLocaleLowerCase())
//console.log(`Nome em caixa alta ${userName.toLocaleUpperCase()}`)

//const frase = "Hoje comi cenoura"
//console.log(frase.includes("cenoura"))
//console.log(frase.includes("cenourax"))
//console.log(frase.includes("cenour"))

//EXERCICIO 2
/*
const frase = prompt("Escreva uma frase")
console.log(frase.toUpperCase())

const fraseSemA = frase.replaceAll("a","i")
const fraseSemE = fraseSemA.replaceAll("e","i")
const fraseSemO = fraseSemE.replaceAll("o","i")
const fraseSemU = fraseSemO.replaceAll("u","i")
console.log(frase)

console.log(fraseSemU)

console.log(frase.length)
*/
//EXERCICIO 3
/*
let racasDeCachorro =["Vira-lata","Doberman","Bulldog","Husky","pintcher"]

const selecao = Number(prompt("Insira um número de 1 a 5"))
console.log("Você escolheu a raca ", racasDeCachorro[selecao-1])

racasDeCachorro.push("Poodle","Pastor-Belga","Pastos","Alemão")
console.log(racasDeCachorro)

racasDeCachorro.pop()
racasDeCachorro.pop()
racasDeCachorro.pop()
racasDeCachorro.pop()
racasDeCachorro.pop()

console.log(racasDeCachorro)
*/
//Praticando Splice
/*
const catalogo = [
"Produto A 0",
"Produto B 1",
"Produto C 2",
"Produto D 3",
"Produto E 4",
"Produto F 5",
"Produto G 6",
"Produto H 7",
"Produto I 8",
]

catalogo.splice(2,2)

console.log(catalogo)

*/
//Exercicio 4
/*
//Para este exercício, comece um array com os valores :1,2,3,4,5,6.
const array = [1,2,3,4,5,6]
//determina o tamanho do array
console.log("Tamanho do array", array.length)

//adiciona  o número 7
array.push(7)
//remova os números 4 e 5
array.splice(3,2)
//determine o novo tamanho do array
console.log("O tamanho do array é ",array.length)
*/







