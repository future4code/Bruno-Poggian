import { useHistory } from "react-router"

export default function LoginPage(){

    const history = useHistory()

    const validaAdmin=()=>{
        history.replace("/admin")
    }


    return(
        <div>
            <form>
                <input type="text" placeholder="Digite seu id" id="login"/>
                <input  type="password" placeholder="Digite sua senha" id="senha"/>
                <button onClick={validaAdmin}>Logar</button>
            </form>
           
        </div>
    )
}