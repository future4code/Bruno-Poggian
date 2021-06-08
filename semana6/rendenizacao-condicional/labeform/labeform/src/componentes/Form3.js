import React from "react";

import styled  from "styled-components";

function Form3() {
    return(
        <div>
             <h1>Informações Gerais de Ensino</h1>
             <form>
              <p>5. Por que você não terminou um curso de graduação?</p>
              <input></input>
              <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Tecnico">Curso Técnico</option>
                    <option value="Ingles">Curso de Inglês</option>
                </select>
                <p></p>
              <button>Próxima etapa</button>

             </form>
        </div>
    )
}



export default Form3