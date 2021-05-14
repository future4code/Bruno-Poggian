/*
//inicio da aula

console.log("Hello World")
console.log("segundou")
console.log(2)
console.log("AAAAAAAAAAAAAAAAAA")
*/

/*let nome =prompt("Qual é o seu nome? usuario querido")
nome = 'giraia'
console.log(nome)


const nome = prompt("Qual o o nome?")
const idade = prompt("Qual idade?")

alert(`Olá ${nome} , sua idade é ${idade}`)

*/

/*Exercicio aula variável

//1-Crie uma variável e atribua o seu nome
    const primeiroNome = 'Bruno'
//2-Crie uma variável e atribua seu Sobrenome
    const segundoNome = 'Mallta'
 //3-Crie uma variável e atribua sua idade
    const idade = 35
 //4-Crie um variável  que diga se você é ou nao estudante
    const estudanteOuNao = true
 //5-Imprima o seu nome , sobrenome, idade e status no console
 console.log(`Eu sou ${primeiroNome} ${segundoNome}, tenho ${idade} anos e sou estudante: ${estudanteOuNao}`)
 alert (`Eu sou ${primeiroNome} ${segundoNome}, tenho ${idade} anos e sou estudante: ${estudanteOuNao}`)//PLUS
*/

 /*exercício 2 aula variável

 //1-Peça o nome do usuário  através do prompt e guarde em uma variável
    const nomeUsuario = prompt("Qual é o seu nome criatura?")
//2-Peça a idade do usuário e através do prompt e guarde em uma variável
    const idadeUsuario = Number(prompt("Qual é a sua idade?"))//metódo Number() requerido para acessar a idade como INT.
//3-Veja qual é o tipo das variáveis de nome e idade
    console.log('O tipo da variável "NOME"=>',nomeUsuario,'é:',typeof nomeUsuario,'e o tipo da variável "IDADE"=>',idadeUsuario, 'é:', typeof idadeUsuario)
    
*/

const idade = 82
const idadestring = idade.toString()

console.log("retornei soma de strings:",idadestring + idadestring)//caso em que soma-se strings
console.log("retornei soma de inteiros:",idade + idade)//caso em que soma-se inteiros(numbers)

console.log('verificando tipo:',typeof idadestring,typeof idade)

const novaIdade = Number('666')

const novaIdadeReborn = Number(idadestring)
console.log('O tipo de nova idade é:', typeof novaIdade,'o tipo de novaIdadeReborn é:',typeof novaIdadeReborn)