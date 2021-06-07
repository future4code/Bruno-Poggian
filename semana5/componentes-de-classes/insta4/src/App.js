import React from 'react';//importando bibliotecas react
import styled from 'styled-components'//importando bibliotecas styled components
import BananinhaMesmo from './components/BananinhaMesmo';
import Post from './components/Post/Post';//importando um componente

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <BananinhaMesmo/>
      </MainContainer>
    );
  }
}

export default App;
