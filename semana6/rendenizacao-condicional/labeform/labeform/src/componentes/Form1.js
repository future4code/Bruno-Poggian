import React from "react";

import styled from "styled-components";

const FormContainer = styled.div`
    display:box;
    align-items:center;
    border:1px solid black;
    background:blue;
    color:red;
`



function Form1(){
    return (
      <div>
          <h1>Dados Gerais</h1>
          <form>
              <p>1.Qual o seu nome?</p>
              <input></input>
              <p>2.Qual sua idade?</p>
              <input></input>
              <p>3.Qual seu email?</p>
              <input></input>
              <p>4.Qual sua escolaridade?</p>
              <select>
                <option>Ensino Médio Incompleto</option>
                <option>Ensino Médio Completo</option>
                <option>Ensino Superior Incompleto</option>
                <option>Ensino Superior Completo</option>
              </select>
              <p></p>
             
              <button>Próxima etapa</button>

          </form>
       
      </div>
    );
  }

export default Form1