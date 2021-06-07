import React from 'react'




class BananinhaMesmo extends React.Component {

  
    state ={
        numeroDeCurtidas: 0,

        
    }
    //lógica de promação vai aqui,js,função etc.
     onClickCurtida = () =>{
        this.setState({
            numeroDeCurtidas: this.state.numeroDeCurtidas + 1
          })
    }

    render (){
  
      return(
        <div>
          <p>Eu sou um componente bananinha</p>
          <button onClick={this.onClickCurtida}>Curtir!</button>
          <p>{this.state.numeroDeCurtidas}</p>
        </div>
      )
    }
  
  }

  export default BananinhaMesmo