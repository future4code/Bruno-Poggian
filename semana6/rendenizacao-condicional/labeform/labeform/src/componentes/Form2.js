import React from "react";

import styled from "styled-components";

const FormContainer = styled.div`
    display:box;
    align-items:center;
    border:1px solid black;
    background:blue;
    color:red;
`



function Form2(){
    return (
      <div>
          <h1>Informações do Ensino Superior</h1>
          <form>
              <p>5.Qual Curso?</p>
              <input></input>
              <p>2.Qual a unidade de ensino?</p>
              <input></input>
              <p></p>
              <button>Próxima etapa</button>

          </form>
       
      </div>
    );
  }

export default Form2