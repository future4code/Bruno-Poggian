//Criado objeto tipado para transações
export type Transaction ={
    value: number,
    date: Date,
    description: string
}
//criando objeto tipado para conta do usuário
export type Account = {
    name: string,
    CPF:string,
    dateOfBirth: Date,
    balance: number,
    statement: Array<Transaction>//tipando array forma 1
}