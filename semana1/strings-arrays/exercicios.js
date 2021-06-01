//EXERCICIOS DA TARDE
//----------------------------------------------------------------------------
//1-Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
//  let array
// console.log('a. ', array)-- undefined

// array = null
// console.log('b. ', array)-- null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)----resposta 11

// let i = 0
// console.log('d. ', array[i])-- resposta 3

// array[i+1] = 19
// console.log('e. ', array)--Irá retornar 3,19,5,6,7,8,9,10........

// const valor = array[i+6]
// console.log('f. ', valor) -- resposta  9
//----------------------------------------------------------------------------------------------------------
//2-leia o código abaixo com atenção

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
//RESPOSTA--"SUBI NUM ÔNIBUS EM MIRROCOS"- tudo em maisculo substituindo "A"por "I"
//-----------------------------------------------------------------------------------------------------------

                                //Exercícios de escrita de código
//----------------------------------------------------------------------------------------------------------- 
//1Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!   

// const perguntaNome  = prompt("Qual é o seu nome?")
// const perguntaEmail = prompt("Qual é o seu e-mail?")

// alert(`O e-mail ${perguntaEmail} foi cadastrado com sucesso.
//                  Seja bem-vinda(o), ${perguntaNome}!`)
//-----------------------------------------------------------------------------------------------------------------
//-2Faça um programa que contenha um array com 5 das suas comidas preferidas, 
//  armazenado em uma variável. Em seguida, siga os passos:
// let comidasPreferidas = ['Arroz','Feijão','Frango','Maionese','Batata Frita']
// // a) Imprima na tela o array completo
// console.log(comidasPreferidas)

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
//  seguida por cada uma das comidas, **uma embaixo da outra**.
// console.log(`Essa são minhas comidas preferidas 
// ${comidasPreferidas[0]}
// ${comidasPreferidas[1]}
// ${comidasPreferidas[2]}
// ${comidasPreferidas[3]}
// ${comidasPreferidas[4]}`)

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//  Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
// const comidaFavoritaUsuario = prompt("Qual a sua comida favorita?")

// comidasPreferidas[1] = comidaFavoritaUsuario
// console.log(comidasPreferidas)
//-------------------------------------------------------------------------------------------------------
//3-Faça um programa, seguindo os passos:
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
// let listaDeTarefas = []

// // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
// listaDeTarefas[0] = (prompt("Digite a primeira tarefa"))
// listaDeTarefas[1] = (prompt("Digite a segunda tarefa"))
// listaDeTarefas[2] = (prompt("Digite a terceira tarefa"))

// // c) Imprima o array na tela
// console.log(listaDeTarefas)

// // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
// const indice =Number(prompt(`Digite o índice da tarefa realizada
// 0-${listaDeTarefas[0]} 1-${listaDeTarefas[1]} 2-${listaDeTarefas[2]}`))

// // e) Remova da lista o item de índice que o usuário escolheu.
// listaDeTarefas.splice(indice,1)

// // f) Imprima o array na tela
// console.log(listaDeTarefas)
//---------------------------------------------------------------------------------------------------------------

                                        //DESAFIOS
//----------------------------------------------------------------------------------------------------------------
 
//1-Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

// let frase = prompt('Digite uma frase')
// let fraseDividida = frase.split(" ")

// console.log(fraseDividida)
//----------------------------------------------------------------------------------------------------------------
//2- Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, 
    //faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array
    const array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    const indexAbacaxi = array.indexOf("Abacaxi")
    const tamanhoArray = array.length
    
    console.log(`O indice de  Abacaxi é :${indexAbacaxi} e o tamanho do Array é ${tamanhoArray}`)