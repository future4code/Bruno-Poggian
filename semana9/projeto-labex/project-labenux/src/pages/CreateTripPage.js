import { useHistory } from "react-router"

export const CreateTripPage=()=>{
    const history = useHistory()

    const backToAdminPage =()=>{
        history.push("/admin")
    }

    return(
        <div>
            <button onClick={backToAdminPage}>voltar</button>
        </div>
    )
}