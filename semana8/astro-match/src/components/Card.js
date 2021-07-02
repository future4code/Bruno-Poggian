import React from 'react'
import styled from 'styled-components';
import logo from '../src/img/logo.png'

const CardConfig = styled.div`
    width:450px;
    height:90vh;
    align-content:center;
    margin-top:45px;
    margin-bottom:10px;
    text-align:center;
    border-radius:15px;
    background-color:yellow;
    border: 2px solid palevioletred;

`



class Card extends React.Component{
    render(){
        return(
            <CardConfig>
               <Logo><img src='/src/img/logo.png' alt='Logo da aplicação' /></Logo>
            </CardConfig>
        )
}
    }
      

export default Card;