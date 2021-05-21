/*                                  
                                    EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO
 
 1-
        a)- {nome :"Amanda Rangel",apelido: "Mandi"}, 0 ,e imprime o array completo,
            {nome:"Lais  Petra", apelido: "Laura"}, 1, e imprime o array completo,
            {nome:"Leticia Chijo, apelido: "Chijo"}, 2, e imprime o array completo,

------------------------------------------------------------------------------------------------------
2-vai logar  nome: ["Amanda Rangel",nome: "Laís Petra", nome: "Letícia Chijo"]

-------------------------------------------------------------------------------------------------------

3-
    a)- "Mandi" ,"laura"
  
-------------------------------------------------------------------------------------------------------
                                     EXERCICIOS DE ESCRITA DE CÓDIGO
   1-                                  
*/
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
/*
 //a-TCHÂNANNNNNN!
    const nomeDosDoguinhos = pets.map((dog) =>{
        return dog.nome
    })

    console.log("Resposta a :",nomeDosDoguinhos)

  
//b-
const apenasSalsicha = pets.filter ((dogRaca) =>{
    return  dogRaca.raca ==="Salsicha"
})

console.log (apenasSalsicha)
 
//c-

    const checaRaca = pets.filter((racaDoDesconto) =>{
        return racaDoDesconto.raca === "Poodle"
    })

    const descontoPoodle = checaRaca.map((racaDoDesconto )=>{
        return  `Você ganhou um cupom de desconto de 10% para tosar o/a ${racaDoDesconto.nome}`

    })

   
    console.log("Resposta -c :",descontoPoodle )
 */

 const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]  

    /*a)-
    const apenasNome = produtos.map((nomeProduto) =>{//Eu estava colocando  o nome do item  a ser mapeado errado,valeu Chijo!
        return nomeProduto.nome
    })
    
    console.log(apenasNome)

    */
    /*b)-
        const produtosComDesconto = produtos.map((prodPromo) =>{
            return {nome: prodPromo.nome, preco: (prodPromo.preco * 0.95).toFixed(2)}
        })      

        console.log("resposta b- ", produtosComDesconto)

    */

        /*c-
        const apenasBebida = produtos.filter((nomeProduto) =>{
            return nomeProduto.categoria === "Bebidas"
        })

        console.log(apenasBebida)

 
*/
        /*d-
            const apenasYpe = produtos.filter((nomesYpe) =>{
                return nomesYpe.nome.includes("Ypê")
            })

            const mensagemYpe = apenasYpe.map((onlyYpe) =>{
                    return `Compre ${onlyYpe.nome} por ${onlyYpe.preco.toFixed(2)}.`
            })
            console.log(mensagemYpe)

            */

           // ------------------------------------------------------------------------------------------------
            //                                        DESAFIO
            //------------------------------------------------------------------------------------------------


            const pokemons = [
                { nome: "Bulbasaur", tipo: "grama" },
                { nome: "Bellsprout", tipo: "grama" },
                { nome: "Charmander", tipo: "fogo" },
                { nome: "Aulpix", tipo: "fogo" },
                { nome: "Squirtle", tipo: "água" },
                { nome: "Psyduck", tipo: "água" },
             ]

             const pokemonEmOrdemAlfabetica = pokemons.map((nomepokemon) =>{
                 return nomepokemon.nome
             })

            console.log(pokemonEmOrdemAlfabetica.sort())


            
            

            function calculaPrimo(num){
                if(num % i === 0)
                
            }


            calculaArea(10,10)

            1
2
3
4
5
6
7
const calculaPrimo = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

       
  