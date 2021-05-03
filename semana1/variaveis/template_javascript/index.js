//             Exercícios de interpretação de código

/*  1-Analise o Programa abaixo e digo o que será impresso no console
SEM EXECUTA O PROGRAMA!.*/


/*                      let a = 10
                        let b = 10

                        console.log(b)

                        b = 5
                        console.log(a, b) 
*/

// RESPOSTA = console.log(b) vai responder 10, console.log(a,b) vair responder 10,5

/*  2-Analise o Programa abaixo e diga  o que será impreso no console
SEM EXCUTAR O PROGRAMA!.*/

 /*                     let a = 10
                        let b = 20
                        c = a
                        b = c
                        a = b

                        console.log(a, b, c)
*/

//RESPOSTA = console.log(a,b,c) vai reponder  console.log(10,10,20)



/* 3-Analise o programa abaixo, entenda o que ele faz e sugira melhores
 nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, 
 usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou 
 caracteres especiais.*/

/*                      let p = prompt("Quantas horas você trabalha por dia?")
                        let t = prompt("Quanto você recebe por dia?")
                        alert(`Voce recebe ${t/p} por hora`)
*/

/*RESPOSTA - Solução de Melhora no código.

                        let horaDiaTrabalhada = prompt("Quantas horas você trabalha por dia?")
                        let valorRecebidoDia = prompt("Quanto você recebe por dia?")
                        alert(`Voce recebe ${horaDiaTrabalhada/valorRecebidoDia} por hora`)
*/

//                      Exercícios de escrita de código 1

 /*                         a) Declare uma variável para armazenar um nome, sem atribuir um valor.

                            b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

                            c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

                            d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

                            e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

                            f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

                            g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu

                           
*/

//                           RESOLUÇÂO- ex1

let nome 
let idade 
 
    console.log(typeof(idade))
    console.log(typeof(idade))

    //o codigo retorna undefined por que não foi declarado nada na variável,NÂO DENIFIDO.

     nome  = prompt("Qual é o seu nome?")
     idade = prompt("Qual é a sua idade?")

    console.log(typeof(nome,idade))
    console.log("Olá",nome,"você tem",idade,"anos")


    //                         Exercícios de escrita de código 2

    /*  Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. 
    Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

    a) Crie três novas variáveis, contendo as respostas

    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:

                    ```
                    Você está usando uma roupa azul hoje? - SIM
                    ```
    */                   
                            // RESOLUÇÂO- ex2 
                            

        let respostaUm
        let respostaDoi
        let respostaTres

        respostaUm = prompt("Você entedeu o exercicio?")
        respostaDois = prompt("Você Gostaria de tomar um café?!")
        respostaTres = prompt("Está pronto para aprender com a Labenu?!")
        
        console.log("Você entedeu o exercicio?",respostaUm)
        console.log("Você entedeu o exercicio?",respostaDois)
        console.log("Você entedeu o exercicio?",respostaTres)



        //            EXERCICO DE ESCRITA DE CÓDIGO -3

        /*

  
    

                                        3. Dadas duas variáveis a e b com valores diferentes, troque o conteúdo delas sem atribuir diretamente os valores!

                                            
                                            //valores iniciais:
                                            let a = 10
                                            let b = 25

                                           // valores finais:
                                            a = 25
                                            b = 10
        ```

        */
       


                                            //valores iniciais:
                                            let a = 10
                                            let b = 25
                                            //trocando valores
                                            let c 
                                            c = b
                                            b = a
                                            a = c

                                            console.log(a,b)

                        

                                        // valores finais:
                                            a = 25
                                            b = 10





                                //           DESAFIO

 /*        Essa seção é OPCIONAL e só deve ser feita se você terminou todos os exercícios propostos anteriormente!

                                1. Faça um programa que receba dois números do usuário e faça as seguintes operações, 
                                    imprimindo os resultados no console da seguinte forma:

                                    ```
                                    1. O primeiro número somado ao segundo número resulta em: x.
                                    2. O primeiro número multiplicado pelo segundo número resulta em: y.
                                    ```
*/

//                                        RESOLUÇÂO DESAFIO

            
            let num1,num2,soma,mult
            
            num1 = prompt("Digite o primeiro número")
            num2 = prompt("Digite o segundo número")
           
            soma = num1 + num2
            mult = num1 * num2

            console.log(" O primeiro número somado ao segundo número resulta em",soma)
            console.log("O primeiro número multiplicado pelo segundo número resulta em: y.",mult)
            
                                    
