//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓGIDO
/*
//1-Indique as mensagens impressas no console,SEM EXECUTAR  o programa.
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)//false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)//true

console.log("d. ", typeof resultado)//boolean
//---------------------------------------------------------------------------------------------------------------------
2-O que será impresso no console
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)//será impresso o valor dos números concatenados, pois o prompt recebe valores em formato string
//----------------------------------------------------------------------------------------------------------------------
//3-imprima a soma  dos números do código anterior
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero
console.log('A nova soma é:',soma)
//---------------------------------------------------------------------------------------------------------------------


//EXERCICIO DE ESCRITA DE CÓDIGO
//1-Faça um programa que:
//a) Pergunte a idade do usuário
const perguntaIdade = Number(prompt('Qual é a sua idade?'))

//b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
const idadeMelhorAmigo = Number(prompt('Qual a idade do seu melhor amigo?'))

//c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
//seguido pela resposta (`true` ou `false`)
console.log('Sua idade é maior que a do seu melhor amigo?',perguntaIdade > idadeMelhorAmigo)

//d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
console.log('A diferença de idade entre vocês é:', perguntaIdade - idadeMelhorAmigo,'anos')
//---------------------------------------------------------------------------------------------------------------------

//2-Faça um programa que:

//a) Peça ao usuário que insira um número **par**
const numeroPar = Number(prompt('Digite um número par'))

//b) Imprima na console **o resto da divisão** desse número por 2.
console.log('O resto da divisão desse número por 2 é:', numeroPar % 2)

//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//resposta -- Todo resto de divisão de número par por 2, retorna 0.

//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
//resposta -- se ele inserir um número impar, o retorno será 1
//---------------------------------------------------------------------------------------------------------------------

//3-Faça um programa que pergunte ao usuário  sua idade em anos.Depois,imprima no console.
const idade = Number(prompt('Qual a sua idade?'))
//a) A idade do usuário em meses
console.log('Sua idade em meses é:',idade / 12)
//b) A idade do usuário em dias
console.log('Sua idade em dias é', idade * 365)

//c) A idade do usuário em horas
console.log("Sua idade em horas é:",idade *365*24 )
//-----------------------------------------------------------------------------------------------------------------------

//4-Faça um programa que pergunte ao usuário dois números. Em seguida, 
    //faça as operações e imprima no console as seguintes mensagens:
    //O primeiro numero é maior que segundo? true
    //O primeiro numero é igual ao segundo? false
    //O primeiro numero é divisível pelo segundo? true
    //O segundo numero é divisível pelo primeiro? true

    const num1 = Number(prompt('Digite o primeiro número'))
    const num2 = Number(prompt('Digite o segundo número'))

    console.log('O primeiro número é maior que o segundo?', num1 > num2)
    console.log('O primeiro número é igual ao segundo?', num1 === num2)
    console.log('O primeiro número é divisivel pelo segundo?', num1 % num2 === 0)
    console.log('O segundo número é divisivel pelo primeiro?', num2 % num1 === 0)
//------------------------------------------------------------------------------------------------------------------------

//DESAFIO
let grausKelvin = Number(prompt('Insira a temperatura em Kelvin '))
let grausFahrenheit = Number(prompt('Insira a temperatura em Fahrenheit '))
let grausCelcius = Number(prompt('Insira a temperatura em Celcius'))

 

const formulaFahrenheitKelvin = (grausFahrenheit - 32) * (5/9) + 273.15
const formulaCelciusFahrenheit = (grausCelcius)* (9/5) + 32

//a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
console.log('O valor de',grausFahrenheit,'°F em K é',formulaFahrenheitKelvin)

//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
console.log('O valor de ',grausCelcius,'°C em °F é : ', formulaCelciusFahrenheit)

//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
let celciusConvertidoEmFahrenheit = (grausCelcius)* (9/5) + 32

console.log('o valor de', grausCelcius,'°C em °F e:',celciusConvertidoEmFahrenheit)

console.log('O valor de',grausCelcius,'°C em K é :',(celciusConvertidoEmFahrenheit - 32) * (5/9) + 273.15)
//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter



//2- Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
//a- Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

const consumoKwHora = Number(prompt("Qual o consumo de Quilowatt mensal?"))
const recebeDesconto = Number(prompt("Qual a porcentagem do desconto?"))
const quilowattHora = 0.05
const calculoConsumo = consumoKwHora * quilowattHora
const porcentagemDesconto = calculoConsumo * recebeDesconto /100
console.log('O valor a ser pago por uma residencia que consome',consumoKwHora,'é de :',calculoConsumo)

//b-Altere o programa para receber mais um valor: a porcentagem de desconto. 
//Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto
console.log("O valor da fatura com desconto de",recebeDesconto,"% é de :",calculoConsumo - porcentagemDesconto)
*/
//-----------------------------------------------------------------------------------------------------------------
//-3
//a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
//`20lb equivalem a X kg`
//const entradaLibra = Number(prompt('Digite a quantidade de Libras que deseja converter em Quilos'))
//const librasXkilos = 0.453592 
//const entradaConvertida = entradaLibra * librasXkilos
//console.log('A quantidade de',entradaLibra,'libras em Kg é :',entradaConvertida)


//b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
//`10.5oz equivalem a X kg`
//const entradaOnca = Number(prompt('Digite o valor em Onça que deseja converter em Quilos'))
//const oncaXkilos = 0.0283495
//const entradaConvertida = entradaOnca * oncaXkilos
//console.log('A quantidade de Onça :',entradaOnca,' em Kg é :',entradaConvertida)

//c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
//`100mi equivalem a X m`
//const entradaMilha = Number(prompt('Digite a entrada em Milha'))
//const milhaXmetro = 1609.34
//const entradaConvertida = entradaMilha * milhaXmetro
//console.log('A quantidade  de milhas(mi): ',entradaMilha,' em metros é :', entradaConvertida)


//d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
//`50ft equivalem a X m`
//const entradaFt = Number(prompt('Digite a entrada em Pés(ft)'))
//const pesFtXmetro = 0.3048
//const entradaConvertida = entradaFt * pesFtXmetro
//console.log('A quantidade  de pés(ft):',entradaFt,' em metros é :', entradaConvertida)


//e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
//`103.56gal equivalem a X l`
//const entradaGalao = Number(prompt('Digite a entrada em Galão'))
//const galaoXlitro = 3785.41
//const entradaConvertida = entradaGalao * galaoXlitro
//console.log('A quantidade  de  Galão(gal):',entradaGalao,' em litros é :', entradaConvertida)

//f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
//`450 xic equivalem a X l`
const entradaXicara = Number(prompt('Digite a entrada em xícara(xic)'))
const xicXlitro = 0.284131
const entradaConvertida = entradaXicara * xicXlitro
console.log('A quantidade  de ',entradaXicara,' em Litros é :', entradaConvertida)

//g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter







