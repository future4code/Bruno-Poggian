      //                 EXERCICIOS CONDICIONAIS




      /*1-

      a)-o código confere se o número que recebeu do usuario é par,ou se o resto da divisão por 2 é ===0
      caso seja printa("Passou no teste"), caso não printa("Não passou no teste").

      b)-Para números pares.

      c)-Para números impares.
      ---------------------------------------------------------------------------------------------------

      2-
      
      a)-O código serve para o usuário escolher um fruta e verificar o preço da fruta escolhida.

      b)-O preço da fruta Maçã  é  R$ 2.25.

      c)-O preço da fruta Pêra  é  R$ 5.
      ---------------------------------------------------------------------------------------------------

      3-

      a)-Está pedindo para o usuário digitar um número

      b)-para número 10, o console vai printar  "Esse número passou no teste", para -10 o console vai printar
      "Essa mensagem é secreta"

      c)-sim, haverá um erro, pois a variavel mensagem é de escopo local
      -----------------------------------------------------------------------------------------------------


                                      EXERCICIOS DE ESCRITA DE CÓDIGO

        ----------------------------------------------------------------------------------------------------    

      1-EXERCICIO 
*/
      /*const idadeUsuario = Number(prompt("Qual é a sua idade?"))//a,b

      if(idadeUsuario >=18 ){
          console.log("Você pode dirigir")//c
      } else {
          console.log("Você não pode dirigir")
      }
      */

      
      //2-Exercicio

      //const verificaTurno = prompt("Digite o turno que você  estuda(M-matutino,V-vespertino,N-noturno")
/*
      if(verificaTurno === "m"){

          console.log("Bom Dia!")

      } else if (verificaTurno === "v"){
          console.log("Boa tarde!")

      }else if(verificaTurno === "n"){

        console.log("Boa Noite!")
      }else {
          console.log("Digite um turno válido!")
      }
      
      switch (verificaTurno) {
          case 'm':
            console.log("Bom Dia!")
        break
        case 'v':
            console.log("Boa Tarde!")
        break
        case 'n':
            console.log("Boa Noite!")
        break
        default:
            console.log("Digite uma opção válida!")


      }
      

      const escolheFilme = prompt("Qual o gênero do filme?")

      const precoIngresso = prompt("Qual o preço do ingresso?")

      if(escolheFilme === 'fantasia' && precoIngresso < 15){
          console.log("Bom filme!")
      } else {
          console.log("Escolha  outro filme :(")
      }
*/

//                                          DESAFIO
      /*1-
      const escolheFilme = prompt("Qual o gênero do filme?")

      const precoIngresso = prompt("Qual o preço do ingresso?")

      if(escolheFilme === 'fantasia' && precoIngresso < 15){
          const lanchinho = prompt("Qual lanchinho você vai comprar?")
          console.log(`Bom filme e aproveite seu ${lanchinho}`)
      } else {
          console.log("Escolha  outro filme :(")
      }
      */
      //2-
      

      let nomeCompleto      = prompt("Qual o seu nome completo?")
      let tipoDoJogo        = prompt("Qual o tipo do jogo? [IN]-internacional [DO] doméstico")
      let etapaDoJogo       = prompt("Qual a etapa do jogo? [SF]Semi-final; [DT]Decisão de 3°lugar[FI]Final")
      let categoriaDoJogo   = prompt("Qual a categoria? 1,2,3 ou 4")
      let quantIngresso     = Number(prompt("Quantos ingressos você deseja?"))
      
      let valorIngresso
      let valorTotal = valorIngresso * quantIngresso

      switch(etapaDoJogo){
        case 'SF':
          etapaDoJogo = "Semi-Final"
            switch (categoriaDoJogo) {
              case '1':
                valorIngresso = 1320
                break;
              case '2':
                valorIngresso = 880
                break;
              case '3':
                valorIngresso = 550
                break;
              case '4':
                valorIngresso = 220
                break;
              default:
                break;
          }
           
           break;
        case 'DT':
          etapaDoJogo ="Disputa 3° Lugar"
            switch (categoriaDoJogo) {
              case '1':
                valorIngresso = 660
                break;
              case '2':
                valorIngresso = 440
                break;
              case '3':
                valorIngresso =330
                break;
              case '4':
                valorIngresso = 170
                break;
              default:
                break;      
            }
          break;
        case 'FI':
          etapaDoJogo ="Finais"
          switch (categoriaDoJogo) {
            case '1':
              valorIngresso = 1980
              break;
            case '2':
              valorIngresso =1320
              break;
            case '3':
              valorIngresso = 880
              break;
            case '4':
              valorIngresso = 330            
              break;
            default:
              break;
          }
        default:
          break;
      }

      if(tipoDoJogo === 'IN'){
        tipoDoJogo = 'Internacional'
        valorIngresso = valorIngresso * 4.10
      } else {
        tipoDoJogo = 'Doméstico'
      }
       
      
      console.log("----Dados da compra----")
      console.log(`Nome do cliente : ${nomeCompleto}`)
      console.log(`Tipo do jogo : ${tipoDoJogo}`)
      console.log(`Etapa do jogo : ${etapaDoJogo}`)
      console.log(`Categoria : ${categoriaDoJogo}`)
      console.log(`Quantidade de ingressos : ${quantIngresso}`)
      console.log("----Valores----")
      console.log(`Valor do ingresso : ${valorIngresso}`)
      console.log("Valor total : ",valorIngresso * quantIngresso )






    