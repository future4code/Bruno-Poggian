//Observe a funão a seguir e JavaScript

//a. Quais são as entradas e saidas dessa função?
//Copie a função para um arquivo .ts e faça a tipagem desses parâmetros


type Estatisticas = {
    maior:number,
    menor:number,
    media:number,   
}

function obterEstatisticas(numeros:number[]):Estatisticas  {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b. Que outras Variáveis compoem essa função?Explique a tipagem de todas elas
