import React from 'react';
import { StyledBtn } from './styles';

// ButtonContainer Component
const Button = () => {
  return (
    <>
      <h1>Button</h1>
      <div>
        <StyledBtn
          size="large"
          border="type1"
          onClick={() => alert('버튼을 만들어보세요')}
        >
          Large Primary
        </StyledBtn>
        <StyledBtn size="medium" theme="type1">
          Medium
        </StyledBtn>
        <StyledBtn size="small" theme="type1">
          type1
        </StyledBtn>
        <StyledBtn
          size="large"
          border="type2"
          onClick={() => prompt('어렵나요?')}
        >
          Large Negative
        </StyledBtn>
        <StyledBtn size="medium" theme="type2">
          Medium
        </StyledBtn>
        <StyledBtn size="small" theme="type2">
          Small
        </StyledBtn>
      </div>
    </>
  );
};

export default Button;
