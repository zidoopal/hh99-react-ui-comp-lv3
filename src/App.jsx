import React from 'react';
import { Reset } from 'styled-reset';
import GlobalStyles from './GlobalStyles';
import Header from './Layout/Header/index';
import LeftSide from './Layout/LeftSide/index';
import RightSide from './Layout/RightSide/index';
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Reset />
        <GlobalStyles />
        <LeftSide />
        <RightSide />
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  width: 800px;
  height: 840px;
  display: flex;
  justify-content: space-evenly;
  margin: 0px auto;
`;

export default App;
