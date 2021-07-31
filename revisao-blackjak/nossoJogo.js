/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    //primeira etapa, imprimir mensagem "Boas vindas ao jogo de Blackjack"

    //jogador1
   let primeiraCartaUsuario1 = 0; 
   let segundaCartaUsuario1 = 0; 
  
   
   //Jogador2
   let primeiraCartaUsuario2 = 0; 
   let segundaCartaUsuario2 = 0; 
   
    

   const carta = comprarCarta();
   
    console.log("Boas vindas ao jogo de Blackjack");
    
    //confirmando se usuario deseja jogar
    if(confirm("Deseja iniciar uma nova Partida?")){
       iniciaJogo();
    }else{
       alert("Fim de jogo!")
       
    }

  function iniciaJogo(){
   primeiraCartaUsuario1 = comprarCarta();
   segundaCartaUsuario1 = comprarCarta();
   let pontuacaoUsuario1 = primeiraCartaUsuario1.valor + segundaCartaUsuario1.valor

   

  primeiraCartaUsuario2 = comprarCarta();
  segundaCartaUsuario2 = comprarCarta();
  let pontuacaoUsuario2 = primeiraCartaUsuario2.valor + segundaCartaUsuario2.valor

  console.log(`Usuario - cartas :${primeiraCartaUsuario1.texto} ${segundaCartaUsuario1.texto} - pontuação: ${pontuacaoUsuario1}`)
  console.log(`Computador - cartas :${primeiraCartaUsuario2.texto} ${segundaCartaUsuario2.texto} - pontuação: ${pontuacaoUsuario2}`)

  if(pontuacaoUsuario1 > pontuacaoUsuario2){
     return console.log("O usuário ganhoou!")
  }else if(pontuacaoUsuario1 === pontuacaoUsuario2){
     return console.log("Empate")
  }else {
     return console.log("O computador ganhou!")
  }

  }
 