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


/*1-

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

function recebeObjetos(caboco){
    
    return [caboco.nome,caboco.nome.length,caboco.idade,caboco.profissao,caboco.profissao.length]
}

console.log(recebeObjetos(objeto2))

*/

//exercicio 3
//a-

const carrinho =[]
//b-
const frutaSacolao1 ={
    nome: 'banana',
    disponibilidade: true
}
const frutaSacolao2={...frutaSacolao1,nome:'laranja'}
const frutaSacolao3={...frutaSacolao1,nome:'abacate'}
//c
function recebeFruta(fruta1,fruta2,fruta3){
    carrinho.push(fruta1,fruta2,fruta3)
    console.log(carrinho)

}
recebeFruta(frutaSacolao1,frutaSacolao2,frutaSacolao3)
//recebeFruta(frutaSacolao2)
//recebeFruta(frutaSacolao3)
console.log(carrinho)





//                                      DESAFIO

/*1 
function perguntaInfo(){
    const pessoa={
        nome : prompt("Qual o seu nome?"),
        idade: prompt("Qual é sua idade"),
        prof : prompt("Qual é a sua profissão?")
    
    }
    console.log(pessoa)
    console.log(typeof(pessoa))
}

perguntaInfo()

*/

//2

/*
function  recebeFilmes(filme1,filme2){
    //retorno da função
    return `O primeiro filme foi lançado antes do segundo?,${filme01.anoLancamento < filme02.anoLancamento}
O primeiro filme foi lançado no mesmo ano do segundo?,${filme01.anoLancamento === filme02.anoLancamento}`
}
const filme01={
    anoLancamento: 1500,
    nome: "A volta do que não foram"

}
const filme02 = {
    anoLancamento: 1800,
    nome:"As linda tranças de um careca"
}

console.log(recebeFilmes(filme01,filme02))

*/

function controleDeEstoque(fruta){

    return {...fruta,disponibilidade: !fruta.disponibilidade}

}

console.log(controleDeEstoque(frutaSacolao1))


//TERMINEI AEEEEE!!! OLHEI OS VIDEOS E FUI CORRIGINDO,MAS TERMINEI





