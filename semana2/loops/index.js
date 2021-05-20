/*const verificaPar = (numero, funcao) => {
    console.log(numero)
    if(numero  % 2 === 0){
        const resultado = numero /2
        funcao(resultado)
        
    }
}

const imprimeMensagem = (valor) =>{
    console.log("O resultado da sua conta é: ", valor)
}

verificaPar(4,imprimeMensagem)


/* ---------------EXERCICIO 1 -------------------
const verificaImpar = (numero,funcaoQueImprime)=>{
    if (numero % 2 !==0){
       funcaoQueImprime()
    }
}


const mandaMensagem = () =>{
    console.log("É impar!!!")
}

verificaImpar(3,)
verificaImpar(3, mandaMensagem)
*/
/*
const listaDeNumbers = [1,2,3,4,5,6,7,8]

const novaLista = listaDeNumbers.map((index,valor) =>{
    return  ` O elemento ${index} é valor${valor}`
})

console.log(novaLista)
*/
/*
const habitosPodres = [{'fumar} { beber'} {'cheira'},{'comer travesti'}]


const habitosParaMudar = habitosPodres.map((index,habitos) =>{
    return ` você deve para de fazer isso ${habitos}`
})
console.log(habitosPodres)
*/
/*
const listaDeNumeros =[1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80]


const numerosMaioresQueDez = listaDeNumeros.filter((numero) => {
        return listaDeNumeros  >= 10
})

console.log(numerosMaioresQueDez)

*/cls

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preço: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preço: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preço: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preço: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preço: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preço: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preço: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preço: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preço: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preço: 10.80 }
 ]
 

 const categorisLimpeza = protudos.filter((produto) => {
    return produto.categoria ==="Limpeza"
 })

 console.log(`produtos  de limpeza ${categoria}`)
 