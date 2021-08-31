import express, {Express} from 'express'
import  cors from 'cors'
import knex from 'knex'
import  dotenv from 'dotenv'
import { AddressInfo } from 'net';
import { Request, Response } from 'express'

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});


const  app : Express = express();
app.use(express.json());//inicia a aplicação web com express
app.use(cors());//os .use() ativam os módulos de Bodyparser e cors

const getActorById = async (id:string):Promise<any> => {
   const result = await connection.raw(`
      SELECT * FROM Actor  WHERE id = '${id}'
   `)
   return result [0][0]
}

const getActorByName = async (name: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = "${name}"
   `)
   return result
 }

 


getActorByName("Tony")
   .then(result => {
      console.log(result)
   })
   .catch(err => {

   });

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

//Assim a chamada funciona fora dos endpoints com await
(async () =>{
   console.log(await getActorById("001"))
})()

//Ou então podemos chamá-la dentro do endpoint
app.get("/users/:id", async (req:Request, res:Response) =>{
   try {
      const id = req.params.id

      console.log(await getActorById(id))

      res.end()
   } catch (error) {
      console.log(error.message)
      res.status(500).send("FAIÔ")
   }
})

//busca ator pelo nome
app.get("/users/:nome"), async (req: Request , res:Response) => {
   try {
      
   } catch (error) {
      
   }
}

//pega ator pelo id
app.get("/Actor/:id", async (req:Request,res:Response) => {
   try {
      const id= req.params.id;
      const actor = await getActorById(id);

      res.status(200).send(actor)

   } catch (err) {
      res.status(400).send({
         message: err.mesage,
      });
   }
});

//pega ator pelo genero
app.get("/Actor", async (req:Request, res:Response)=> {
   try {
      const count = await countActor(req.query.gender as string);
      res.status(200).send({
         quantity:count,
      });
   } catch (err) {
      res.status(400).send({
         message: err.message,
      });
   }
});



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});



