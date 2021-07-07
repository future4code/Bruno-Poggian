import React from 'react'
import { useHistory } from 'react-router'

export const TripDetailsPage =()=>{
    const history = useHistory()

    const backToAdminPage =()=>{
        history.push("/admin")
    }

    return(
        <div>
            <button onClick={backToAdminPage}>Voltar</button>
        </div>
    )
}