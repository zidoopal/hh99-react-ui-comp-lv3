import React from 'react';
import Button from '../../components/Button/index';
import { LeftSideContainer, TransitionDiv } from './styles';
import { StyledBtn } from '../../components/Button/styles';
import { ModalContainer } from '../../components/Modal/styles';

const ModalBtn = ({ size, theme, onClick }) => (
  <StyledBtn size={size} theme={theme} onClick={onClick} className="modal-btn">
    open
  </StyledBtn>
);

const LeftSide = ({ toggleSmallModal, toggleLargeModal }) => {
  return (
    <LeftSideContainer>
      <TransitionDiv>
        <Button />
      </TransitionDiv>

      <TransitionDiv>
        <ModalContainer>
          <h2>Modal</h2>
          <ModalBtn size="small" theme="type1" onClick={toggleSmallModal}>
            open
          </ModalBtn>

          <ModalBtn size="large" theme="type2" onClick={toggleLargeModal}>
            open
          </ModalBtn>
        </ModalContainer>
      </TransitionDiv>
    </LeftSideContainer>
  );
};

export default LeftSide;
