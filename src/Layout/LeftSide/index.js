import React from 'react';
import Button from '../../components/Button/index';
import Modal from '../../components/Modal/index';
import { LeftSideContainer, TransitionDiv } from './styles';

const LeftSide = () => {
  return (
    <LeftSideContainer>
      <TransitionDiv>
        <Button />
      </TransitionDiv>
      <TransitionDiv>
        <Modal />
      </TransitionDiv>
    </LeftSideContainer>
  );
};

export default LeftSide;
