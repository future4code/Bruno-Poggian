//exercício-1
//a)-

//b)-
// const nome = process.argv[2]
// const idade = process.argv[3]

// function recebeDados (nome,idade){
//     return `olá,${nome}! Você tem ${idade} anos.`;

// }

// console.log(recebeDados(nome,idade))

//c)-mostra idade daqui a 7 anos
    const nome = process.argv[2]
    const idade = Number(process.argv[3])

    function recebeDados (nome,idade){
        return `olá,${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7} anos`;

}

console.log(recebeDados(nome,idade))

//2-
    const mult = n1 * n2;
    const sub = n1 - n2;
    const sum = n1 + n2;
    const div = n1 / n2;

    const n1= Number(process.argv[2])
    const n2= Number(process.argv[3])

    function calculaNumeros (n1,n2,op){
        return n1+op+n2
    }
    console.log(calculaNumeros(1,2,))


