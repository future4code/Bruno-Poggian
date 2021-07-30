// // // EXERCÍCIO 01
function inverteArray(array) {
    let arrayInvertido = [];
    for(let i = array.length -1; i >= 0 ; i--){
      console.log(arrayInvertido)
     arrayInvertido.push(array[i])
    }
    return arrayInvertido
    console.log(arrayInvertido);
}
// // inverteArray([1,2,3,4,5]);

// // // EXERCÍCIO 02
// function retornaNumerosParesElevadosADois(array) {
//   let novoArray =[];

//   for(let i = 0; i < array.length;i++){
//     if(array[i] % 2 === 0){
//       novoArray.push(array[i]**2)
//     }
     
//   }
//    return novoArray;
// }



// // // EXERCÍCIO 03
// function retornaNumerosPares(array) {
//   let arrayPar =[];
//   for(let i = 0; i < array.length;i++){
//     if(array[i] % 2 === 0){
//       arrayPar.push(array[i]);
//     }
//   }
//   return arrayPar
// }

// // // EXERCÍCIO 04
// function retornaMaiorNumero(array) {
//   let maiorNumero = 0;
//   for(let i = 0; i < array.length;i++){
//     if(array[i] > maiorNumero){
//       maiorNumero = array[i]
//     }
    
//   }
//   return maiorNumero  
// }

// // // EXERCÍCIO 05
// function retornaQuantidadeElementos(array) {
//   return array.length
// }

// EXERCÍCIO 06
// function retornaExpressoesBooleanas() {
  

// }

// // EXERCÍCIO 07
// function retornaNNumerosPares(n) {
//   let primeiroNumero = n-n
//   let numerosPares =[];
  
//   for(let i =n-n; i <= n;i++){
//     if(i %2 === 0){
//       numerosPares.push(i)
//     }
//   }
// console.log(numerosPares)
// }


// // // EXERCÍCIO 08
// function checaTriangulo(a, b, c) {
//     if(a === b && b === c){
//       return  'Equilátero'
//     }else if(a === b && a !==c  || a === c && a !==b || c === b && b !== a){
//       return 'Isósceles'
//     }else{
//       return 'Escaleno'
//     }
      
       
// //   // 
// //   // 
// // }

// // // EXERCÍCIO 09
// function comparaDoisNumeros(num1, num2) {
//   let maiorNumero =0;
//   let menorNumero = 0;
//   let divisivel = false;
//   if( num1 > num2){
//     maiorNumero = num1
//     menorNumero = num2
//   }else{
//     maiorNumero = num2
//     menorNumero = num1
//   }
//   if(maiorNumero % menorNumero === 0){
//    divisivel = true;
//   }
//   let diferenca = maiorNumero - menorNumero;
//   // Formato do objeto a ser retornado:
//   // {
//   //   maiorNumero: X,
//   //   maiorDivisivelPorMenor: Y,
//   //   diferenca: Z
//   // }
  

//   return {
//     maiorNumero:maiorNumero,
//     maiorDivisivelPorMenor:divisivel,
//     diferenca:diferenca 
//   }
// }
// // EXERCÍCIO 10
// // function segundoMaiorEMenor(array) {
// //   let arrayDoisValores =[];

// // }

// // // EXERCÍCIO 11
// // function ordenaArray(array) {
// //   let arrayCrescente [];
// //   let maiorNumero = 0;
// //   let menorNumero = 0;

// //   for(let i=0;i < array.length;i++){
// //     if(array[i] > maiorNumero){
// //       arrayCrescente.push(array[i].length -1);
// //     }
// //   }
// //   console.log(arrayCrescente)
// // }

// // EXERCÍCIO 12
// function filmeFavorito() {
//   const filmeFavoritoAstroDev ={
//     nome: 'O Diabo Veste Prada',
//     ano:2006,
//     diretor:'David Frankel',
//     atores:['Meryl Streep','Anne Hathaway','Emily Blunt','Stanley Tucci']
//   }
//   return filmeFavoritoAstroDev
// }

// // EXERCÍCIO 13
// function imprimeChamada() {
//   // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
//   const filmeFavoritoAstroDev ={
//     nome: 'O Diabo Veste Prada',
//     ano:2006,
//     diretor:'David Frankel',
//     atores:['Meryl Streep',' Anne Hathaway',' Emily Blunt',' Stanley Tucci']
//   }
//   return `Venha assistir ao filme ${filmeFavoritoAstroDev.nome}, de ${filmeFavoritoAstroDev.ano}, dirigido por ${filmeFavoritoAstroDev.diretor} e estrelado por ${filmeFavoritoAstroDev.atores}.` 
// }

// // EXERCÍCIO 14
// function criaRetangulo(lado1, lado2) {
//     return {
//       largura:lado1,
//       altura:lado2,
//       perimetro: 2*(lado1 + lado2),
//       area: lado1 * lado2
//     }
// }

// // EXERCÍCIO 15
// // function anonimizaPessoa(pessoa) {
// //   const pessoaAnonima = {
// //     ...nome:{nome:"ANÔNIMO"}
// //     return 
// //   }
// // }

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
      let adultos = []
      console.log(arrayDePessoas);
      const pessoaMaior = arrayDePessoas.filter((pessoa) =>{
        if(pessoa.idade >= 18)
          adultos.push( pessoa)
        
       
      })
      return adultos
    }

// // EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  let arrayMenores =[];
  const menorDeIdade = arrayDePessoas.filter((pessoa)=>{
    if(pessoa.idade < 18 ){
      arrayMenores.push(pessoa)
    }
  }) 
  return arrayMenores
}

// // EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  let arrayNovoPorDois = []
  for(let i =0; i < array.length;i++){
    arrayNovoPorDois.push( array[i]*2)
  }
  return arrayNovoPorDois
}

// // EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const novoArray = array.map((num) => {
    return (num * 2).toString()
  })
  return novoArray
}


// // EXERCÍCIO 17C
function verificaParidade(array) {
  const novoArray = array.map((num)=>{
    if(num % 2 === 0){
      return `${num} é par`
    }else{
      return `${num} é ímpar`
    }
    
  })
  return novoArray
}

// // EXERCÍCIO 18A
function retornaPessoasAutorizadas (pessoas) {
  let pessoasAutorizadas =[];
  for(const pessoa of pessoas){
    if(pessoa.altura >=1.5 && pessoa.idade >14 && pessoa.idade < 60){
      pessoasAutorizadas.push(pessoa)
    }
  }
  return pessoasAutorizadas;
}


// // EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  let naoAutorizadas =[];
  for(const pessoa of pessoas){
    if(pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60){
      naoAutorizadas.push(pessoa)
    }
  }
  return naoAutorizadas;
}

// // EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  for(let i =0; i <consultasNome.length;i++) {
    for(let j = 0; j < consultasNome.length -i-1;j++){

    }
  }
}

// // EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  for (let i=0; i< consultasData.length;i++){
    for(let j=0; j < consultasData.length -i -1;j++) {
      
      const arrayData1 = consultasData[j].dataDaConsulta.split('/')
      const dia1 = Number (arrayData1[0])
      const mes1 = Number (arrayData1[1])
      const ano1 = Number (arrayData1[2])
    }

  }
}

// // EXERCÍCIO 20
// // function calculaSaldo(contas) {

// // }
