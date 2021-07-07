
import {CreateTripPage} from './CreateTripPage'
import { TripDetailsPage } from "./TripDetailsPage";
import React from 'react';
import { useHistory } from 'react-router';




 const AdminHomePage= ()=>{
    const history = useHistory()

    const backToHome =()=>{
        history.replace("/")
    }

    const goToTripCreate =()=>{
        history.push("/tripCreate")
    }

    const goToTripDetail =()=>{
        history.push("/tripDetail")
    }

    


    return(
        <div>
             
             
            <button onClick={goToTripCreate}>Cria Viagem</button> 
            <button onClick={goToTripDetail}>Detalhes da Viagem</button> 
            <button onClick={backToHome}>Volta pra Home</button> 
        </div>
    )
}

export default AdminHomePage;