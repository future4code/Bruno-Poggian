//                             Exercícios de interpretação de código


//1-

/* O console irá imprimir filme o elenco posição 0-Matheus Nachtergaele,
    a ultima posição do array elenco Virginia Cavendish,e imprimir a ultima posição do array transmissoesHoje
    Globo,  horário  14hr.
    ============================================================================================================
*/

/*2-

a-
    nome: "Juca", 
	idade: 3, 
	raca: "SRD"

    nome: "Juba", 
	idade: 3, 
	raca: "SRD"

    nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

b-
    a sintaxe ... copia toda estrutura do objeto

    ===========================================================================
    3-
    a-o console vai logar false e undefined

    b-logou false pois backender é um valor boleano, logou undefined pois altura não foi declarado no objeto.
    

*/


//                             EXERCICIOS DE ESCRITA


//1-

const pessoa ={
    nome: "Bruno",
    apelidos: ["Bru","Bruninho","Madona"]
    
}

function recebeEntrada(objeto){
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos[0]},${pessoa.apelidos[1]},${pessoa.apelidos[2]}` )
}
recebeEntrada(pessoa)//ADOREI, TINHE QUE VER MINHA CARA QUANDO O CÓDIGO RODOU!

pessoa.apelidos = ["Mindingo","Bin Laden","Madruga"]

recebeEntrada(pessoa)

//exercicio 2
const objeto1 ={
    nome:"Bruno Mallta",
    idade:35,
    profissao:"Genio da Nasa"
}
const objeto2 ={
    nome:"Bruno Poggian",
    idade:35,
    profissao:"Estudante Labenu"
}

function recebeObjetos(objeto1,objeto2){
    const info1 =

    return objeto1[],objeto2[]
}

//exercicio 3

const carrinho =[]

const frutaSacolao1 ={
    nome: 'banana',
    disponibilidade:true
}

const frutaSacolao2={...frutaSacolao1,nome:'laranja'}
const frutaSacolao3={...frutaSacolao1,nome:'abacate'}

function fruta(fruta){

}


