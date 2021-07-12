import { useHistory } from "react-router"
import {useState} from 'react'
import { useEffect } from "react"
import axios from 'axios'



function LoginPage() {


    const [email,setEmail]=useState("")

    const [password,setPassword]=useState("")

    const history = useHistory()

    const validaAdmin = () => {
        history.replace("/admin")
    }

    const onChangePassword=(event)=>{
        setPassword(event.target.value)
        console.log(password)
    }

    const onChangeEmail=(event)=>{
         setEmail(event.target.value)
         console.log(email)
    }

    const loginAuth=()=>{
        const body ={
            email: email,
            password: password
    
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/bruno-mallta/login",body)
        .then((response)=>{
            window.localStorage.setItem("token",response.data.token);
            history.push("/admin")
        })
        .catch((error)=>{
            console.log("Deu ruim",error.data)
        })
    }



    return (
        <div>
             <form>
                <input type="email" value={email} placeholder="Digite seu e-mail" onChange={onChangeEmail}/>

                <input type="password" value={password} placeholder="Digite sua senha" onChange={onChangePassword}/>

                <button onClick={loginAuth}>Logar</button>
            </form> 

        </div>
    )
}

export default LoginPage;