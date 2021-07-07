import React from 'react'
import './ApplicationFormPageStyle.css'


export default function ApplicationFormPage(){

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
            </form>
        </div>
    )
}