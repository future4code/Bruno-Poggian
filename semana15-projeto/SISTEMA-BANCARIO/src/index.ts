//criando API express
import express,{ Express, Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app = express()

//configurando Middleware
app.use(express.json())
app.use(cors())

//criando o endpoint para cadastro no array de usuários
app.post("/users/create", (req:Request, res:Response) =>{
    try {
        //validar as entradas da req
        //consultar ou alterar a base de dados
        const {name, CPF, birthdayDate } = req.body //dia//mes//ano
        //dividindo a string com método split
        const [day,month, year] = birthdayDate.split("/") //[01, 01 ,2020]
        //formatando data de nascimento dividida no método split
        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        //validar as entradas da requisição    
        const ageMiliseconds: number = Date.now() - dateOfBirth.getTime()//2 formas de fazer o time Stamp
        //const age: number = new Date().getTime()

        //convertendo idade em milisegundos para segundos
        const ageInYears: number = ageMiliseconds / 1000 / 60 / 60 / 24 / 365

        if(ageInYears < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        accounts.push({ 
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement:[]
        })
        //valida os resultados da consulta
        //enviar a resposta
        res.status(201).send("Conta criada com sucesso!")
    }catch (error){
        console.log(error)
        res.send(error.message)
    }
})

app.get("/users/all", (req: Request, res:Response)=>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    }catch (error){
        res.send(error.message)
    }
})

const porta = 3003

app.listen(porta,()=>{
    console.log(`Servidor Up!na porta ${porta}`)
})