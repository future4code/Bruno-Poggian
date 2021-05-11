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
      

      //const nomeCompleto      = prompt("Qual o seu nome completo?")
      const tipoDoJogo        = prompt("Qual o tipo do jogo? IN indica internacional; e DO indica doméstico".toUpperCase())
      const etapaDoJogo       = prompt("Qual a etapa do jogo? SF-indica semi-final; DT-indica decisão de terceiro lugar; FI-indica final")
      const categoriaDoJogo   = prompt("Qual a categoria? 1,2,3 ou 4")
      //const quantIngresso     = Number(prompt("Quantos ingressos você deseja?"))
    
      //checkando valor do ingresso doméstico
      let valorIngressoDomestico = 0

      if(tipoDoJogo === 'do' && etapaDoJogo ==='dt' && categoriaDoJogo === '1'){
          valorIngressoDomestico = 660.00
      } else if (tipoDoJogo === 'do' && etapaDoJogo ==='dt' && categoriaDoJogo === '2'){
          valorIngressoDomestico = 440.00
      } else if(tipoDoJogo === 'do' && etapaDoJogo ==='dt' && categoriaDoJogo === '3'){
          valorIngressoDomestico =330.00
      } else{
          valorIngressoDomestico = 170.00
      }

      //checkando o valor do ingresso internacional
      let valorIngressoDomesticoSemiFinal= 0

      if (tipoDoJogo === 'do' && etapaDoJogo ==='sf' && categoriaDoJogo === '1'){
        valorIngressoDomestico = 1320.00
      } else if (tipoDoJogo === 'do' && etapaDoJogo ==='sf' && categoriaDoJogo === '2'){
        valorIngressoDomestico = 880.00
      } else if(tipoDoJogo === 'do' && etapaDoJogo ==='sf' && categoriaDoJogo === '3'){
        valorIngressoDomestico = 550.00
      } else{
        valorIngressoDomestico = 220.00
      }

      let valorIngressoDomesticoFinal= 0

      if (tipoDoJogo === 'do' && etapaDoJogo ==='fi' && categoriaDoJogo === '1'){
        valorIngressoDomestico = 1980.00
      } else if (tipoDoJogo === 'do' && etapaDoJogo ==='fi' && categoriaDoJogo === '2'){
        valorIngressoDomestico = 1320.00
      } else if(tipoDoJogo === 'do' && etapaDoJogo ==='fi' && categoriaDoJogo === '3'){
        valorIngressoDomestico = 880.00
      } else{
        valorIngressoDomestico = 330.00
      }

      

      


       
      /*
      console.log("---Dados da compra---")
      console.log(`Nome do cliente: ${nomeCompleto}`)
      console.log(`Tipo do jogo: ${tipoDoJogo}`)
      console.log(`Etapa do jogo: ${etapaDoJogo}`)
      console.log(`Categoria ${categoria}`)
      console.log(`Quantidade de ingressos ${quantIngresso}`)
      console.log("---Valores---")
      console.log(`Valor do ingresso: ${valorIngresso}`)
      console.log(`Valor total: ${valorTotal}`)
*/





      