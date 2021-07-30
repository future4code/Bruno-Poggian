// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) { 
  // implemente sua lógica aqui
  let areaDoRetangulo = altura * largura;
  console.log (areaDoRetangulo);
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura);
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // let nome = prompt('Digite seu nome');
  // let idade = Number(prompt('Digite sua idade'));
  // let email = prompt('Digite seu email');
  //implemente sua lógica aqui
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."


}

imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("qual a primeira cor?");
  let cor2 = prompt("qual a primeira cor?");
  let cor3 = prompt("qual a primeira cor?");
  let arrayCores = [cor1,cor2,cor3];
  console.log(arrayCores)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let quantidadeIngressos = custo / valorIngresso;
   return quantidadeIngressos;

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  if(string1.length === string2.length){
    return true;
  }else {
    return false;
  }

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimoElemento= array[array.length -1];
  return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let newArray =[];
  for(let i=0;i <array.length;i++){
    array[0]= array[array.length-1];
    console.log(array)
  }
   
 }

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
   string1= string1.toUpperCase();
   string2= string2.toUpperCase();
  // implemente sua lógica aqui
  if(string1 === string2){
   return true;
  }

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual =Number(prompt('ano atual:'))
  let anoNascimento =Number(prompt('ano de nascimento:'))
  let anoIdentidade = Number(prompt('ano de emissao do RG:'))
  let tempodeCarteira = anoAtual - anoIdentidade

  let idadePessoa = anoAtual - anoNascimento;
  if(idadePessoa <= 20 && tempodeCarteira === 5){
    return true;
  }else if (idadePessoa === 20 && idadePessoa <= 50 && tempodeCarteira === 10){
    return true;
  }else if (idadePessoa > 50 && tempodeCarteira === 15){
    true
  } else {
    return false
  }
  }
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let perguntaIdade = prompt('Você tem mais de 18 anos?');
  let possuEnsinoMedio = prompt('Você possui ensino médio completo?');
  let possuiDisponibilidade = prompt('Você tem mais de 18 anos?');

  if(perguntaIdade === 'sim' &&
     possuEnsinoMedio === 'sim'&& 
     possuiDisponibilidade === 'sim'){
       return true;
     } else {
       return false
     }



}


}