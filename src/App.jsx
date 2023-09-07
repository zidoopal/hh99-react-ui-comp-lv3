import { useState } from 'react';
import { Reset } from 'styled-reset';
import GlobalStyles from './GlobalStyles';
import Header from './Layout/Header/index';
import LeftSide from './Layout/LeftSide/index';
import RightSide from './Layout/RightSide/index';
import Modal from './components/Modal/index';
import styled from 'styled-components';

const App = () => {
  const [isSmallModalOpen, setIsSmallModalOpen] = useState(false);
  const [isLargeModalOpen, setIsLargeModalOpen] = useState(false);

  return (
    <>
      <Header />
      <MainContainer>
        <Reset />
        <GlobalStyles />
        <LeftSide
          toggleSmallModal={() => setIsSmallModalOpen(!isSmallModalOpen)}
          toggleLargeModal={() => setIsLargeModalOpen(!isLargeModalOpen)}
        />
        <RightSide />
        <Modal
          isSmallModalOpen={isSmallModalOpen}
          isLargeModalOpen={isLargeModalOpen}
          setIsSmallModalOpen={setIsSmallModalOpen}
          setIsLargeModalOpen={setIsLargeModalOpen}
        />
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
