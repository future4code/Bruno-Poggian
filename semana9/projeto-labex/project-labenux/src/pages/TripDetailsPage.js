import React from 'react'
import { useHistory } from 'react-router'

export const TripDetailsPage = () => {
    const history = useHistory()

    const backToAdminPage = () => {
        history.push("/admin")
    }
    const backToHome = ()=>{
        history.push("/")
    }

    return (
        <div>
            
            <button onClick={backToAdminPage}>Voltar</button>
            <button onClick={backToHome}>Voltar</button>
        </div>
    )
}