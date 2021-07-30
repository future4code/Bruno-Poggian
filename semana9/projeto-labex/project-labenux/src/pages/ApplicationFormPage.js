import React from 'react'
import './ApplicationFormPageStyle.css'
import { useHistory } from 'react-router'


export default function ApplicationFormPage(){

    const history = useHistory()

    const backToHome=()=>{
        history.push("/")
    }

    return(
        <div>
            <form className="formConfig">
                <h1>Selecione uma viagem</h1>
                <select>
                <option value="" placeholder="Escolha sua viagem"></option>
                </select>
                <input/>
                <input/>
                <input/>
                <input/>
                <select>
                    <option value="" placeholder="Escolha sua viagem"></option>
                </select>
                <button onClick={backToHome}>Voltar</button>
            </form>
        </div>
    )
}