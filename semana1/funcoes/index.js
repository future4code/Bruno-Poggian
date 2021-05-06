                         

                    /*                 AULA-06 FUNÇÕES                                          
                            EXERCICIOS E INTERPRETAÇÃO DE CÓDIGO*/

            
    /*  Ex-1

        a -Irá retornar os números 10,50 a função retorna o parâmetro *  5.
        b- não acontece nada visualmente
     
   ===========================================================================================
   
   Ex-2

       a- a função pega a frase do usúario e retorna  a palavra cenoura em minúsculo.
       b-
           i.Eu  gosto de cenoura ---- saida normal, como foi escrito
          ii.CENOURA é bom pra vista-- saida: cenoura é bom pra vista
         iii.cenouras crescem na terra-- saida normal, como foi escrito
         
    ============================================================================================
    
                                EXERCICIO  DE ESCRITA DE CÓDIGO

    
   1-
     
*/


 //A-


    function quemSouEu() {

    return console.log("Meu nome é Bruno, tenho 35 anos, sou de Curitiba e sou Estudante")
     
  }

    quemSouEu()

//B

const nome = "Bruno"
const idade = 35
const cidade = "Curitiba"
const profisao = "Estudante"


function fraseDesafio(){

        let frase = console.log(`Eu sou ${nome}, tenho${idade} anos, moro em ${cidade} e sou ${profisao}`)
    
        return frase
    
}

fraseDesafio()




                                  //EXERCICIO2

   //a- 
    function somaDoisNumeros (num1, num2){
        let soma = num1 + num2
        console.log(soma)
        return soma
    }

    somaDoisNumeros(10,20)

    //b-
    function trueOrFalse(num1,num2){

        let comparacao = num1 >= num2 
        console.log(comparacao)
        
        return comparacao

    }

    trueOrFalse(10,2)

    //c-

    function parOuImpar(num){
       
        let checaPar = num % 2 === 0

        console.log(checaPar)
        return checaPar
    }


    parOuImpar(10)


    //d-

     function mensagem ( string){
         
        let mensagem = prompt("Digite sua mensagem aqui caramada")
        console.log(mensagem.length)
        console.log(mensagem.toUpperCase())
     }

     mensagem()


     //3

        function funcaoSoma (num1,num2){

            let soma = num1 + num2
            console.log(soma)

        return soma
            
        }

        function funcaoSubtrai (num1,num2){

            let subtrai = num1 - num2
            console.log(subtrai)

        return subtrai
            
        }

        function funcaoMultiplica (num1,num2){

            let multiplica = num1 * num2
            console.log(multiplica)

        return multiplica
            
        }

        function funcaoDivide (num1,num2){

            let divide = num1 / num2
            console.log(divide)

        return divide
            
        }

        let num1 = Number (prompt("Dite um número"))
        let num2 = Number (prompt("Digite outro número"))

        funcaoSoma(num1,num2)
        funcaoSubtrai(num1,num2)
        funcaoMultiplica(num1,num2)
        funcaoDivide(num1,num2)




        //   desafio

        //Gente nâo conseguir fazer a tempo por causa do StandUp e minhas Dúvidas,mas vou tentar



