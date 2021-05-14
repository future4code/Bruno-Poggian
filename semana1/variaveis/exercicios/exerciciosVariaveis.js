//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

/*1-
    a)-Diga o que será impresso no console
    let a = 10
    let b = 10

    console.log(b) --- será impresso 10.

    b = 5
    console.log(a, b)--- será impresso 10,5
----------------------------------------------------------------------
2-
    a)-Diga o que será impresso no console
    
    let a = 10
    let b = 20
    let c
    c = a
    b = c
    a = b

console.log(a, b, c)--- será impresso no console 10,10,10
----------------------------------------------------------------------------------------------------------------

3-
   a)-Sugira melhores nomes para as variaveis

let p = prompt("Quantas horas você trabalha por dia?")--- let  horasDia
let t = prompt("Quanto você recebe por dia?")--- let pagamentoDiario
alert(`Voce recebe ${t/p} por hora`)--- alert(`Voce recebe ${horasDia/pagamentoDiario} por hora`)
//código refatorado
let horasDia = Number(prompt("Trabalha Quantas horas dia?"))
let pagamentoDiario = Number(prompt("Quanto recebe quando por  dia?"))

alert(`Você Recebe apenas:R$ ${pagamentoDiario/horasDia} por hora`)//revisando percebi que posso executar uma operação dentro da chave
-----------------------------------------------------------------------------------------------------------------

----------------------------EXERCIO DE ESCRITA DE CÓDIGO----------------------------------------------------------


//1-CONSTRUA UM PROGRAMA SEGUINDO OS SEGUINTES PASSOS.

    //a-Declare uma variável para armazenar um nome, sem atribuir um valor.
        let armazenaNome 

    //b-Declare uma variável para armazenar uma idade, sem atribuir um valor.
        let armazenaIdade

    //c-Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.
        console.log("Variável armazenaNome:",typeof armazenaNome)// logou undefined
        console.log("Variável armazenaIdade:",typeof armazenaIdade)//logou undefined

    //d-Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código
        //foi impresso undenfined , pois os valores das variáveis não foram definidos.

    //e-Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
        armazenaNome = prompt("Qual o seu nome meu camarada?!")
        armazenaIdade = Number(prompt("Qual a sua idade meu camarada?"))

    //f- Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    console.log("Variável armazenaNome após atribuição: ",typeof armazenaNome)
    console.log("Variável armazenaIdade após atribuição: ",typeof armazenaIdade)
    //notei que os tipo das variáveis agora foram mostrados corretamente,pois foram atrubuidas

    //g-   Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu 
    console.log(`Olá ${armazenaNome},  você tem ${armazenaIdade} anos`)  
  ------------------------------------------------------------------------------------------------------------

  2-Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
    Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    //a- Crie três novas variáveis, contendo as respostas
        const reposta1 = prompt("Você recomeçou todas as aulas do zero?")
        const resposta2 = prompt("Você não entendeu Bulhufas do que foi passado?")
        const resposta3 = prompt("Você vai passar o Final de semana refazendo o conteúdo de 2 semanas?")

    //b- Imprima na tela todas as perguntas seguidas por suas respectivas respostas.
    console.log("Você recomeçou todas as aulas do zero?",reposta1)
    console.log("Você não entendeu Bulhufas do que foi passado?",resposta2)
    console.log("Você vai passar o Final de semana refazendo o conteúdo de 2 semanas?",resposta3) 
    -------------------------------------------------------------------------------------------------------------
    */

    /* 3-Suponha que temos duas variáveis a e b, cada uma com um valor inicial
    let a = 10
    let b = 25
    //AGORA TROQUE O VALOR DE A POR B

    let troca

    troca = b
    b = a
    a = troca
    console.log("O novo valor de  a é: ",a)
    console.log("O novo valor de  b é: ",b)
    --------------------------------------------------------------------------------------------------------------

   */
  
    /*DESAFIO

    1-Faça um programa que receba dois números do usuário e faça as seguintes operações, 
      imprimindo os resultados no console da seguinte forma:
      1. O primeiro número somado ao segundo número resulta em: x.
      2. O primeiro número multiplicado pelo segundo número resulta em: y.
    */

      let primeiroNumero = Number(prompt("Digite o primeiro Número"))
      let segundoNumero = Number(prompt("Digite o segundo Número"))

      console.log(`O primeiro número somado ao segundo número resulta em: ${primeiroNumero + segundoNumero}`)//somando direto na chave
      console.log(`O primeiro número multiplicado ao segundo número resulta em: ${primeiroNumero * segundoNumero}`)

      alert(`O primeiro número somado ao segundo número resulta em: ${primeiroNumero + segundoNumero}`)//apresentando com alert
      alert(`O primeiro número multiplicado ao segundo número resulta em: ${primeiroNumero * segundoNumero}`)
      


    



