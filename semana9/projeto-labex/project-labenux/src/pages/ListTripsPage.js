import { useHistory } from "react-router";

const ListTripsPage =()=>{
    const history = useHistory()

    const backToHome =()=>{
        history.push("/")
    }

    const applyForTrip=()=>{
        history.push("/applyfortrip")
    }

    return(
        <div>
            <form className="formConfig">
                <button onClick={backToHome}>voltar Home Page</button> 
                <button onClick={applyForTrip}>Aplicar para uma viagem</button>
            </form>
           
        </div>
    )
}

export default ListTripsPage;