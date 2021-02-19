import React from 'react';
import Routes from './Routes' 

import styled from 'styled-components';


const Wrapper =  styled.section`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`;

 
const App = () => {
  return (
    <Wrapper>
     <Routes />    
     </Wrapper>
    
  );
}

export default App;
