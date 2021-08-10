const minhaString:string="Aloha"


//a-string = 9  vai dar um erro de type pq o type é string e estamos tentando passar um number

//b-
const meuNumero: number = 666
//podemos usar o Pipe | number | string

//c-

type pessoa = {
    name:string,
    idade:number,
    corFavorita:string
}

enum COR_DO_ARCO_IRIS{
    AZUL =" azul",
    AMARELO = "amarelo",
    VERMELHO = "vermelho",
    ANIL = "anil",
    VIOLETA ="violeta",
    LARANJA = "laranja",
    VERDE = "verde"
}


const pessoa1:pessoa ={
    name:'Bruno',
    idade:35,
    corFavorita:COR_DO_ARCO_IRIS.AZUL
}

const pessoa2:pessoa = {
    name:'Mônica',
    idade:20,
    corFavorita:COR_DO_ARCO_IRIS.AZUL
}

const pessoa3:pessoa= {
    name:'Felipe',
    idade:27,
    corFavorita:COR_DO_ARCO_IRIS.VERMELHO
}



