import React from 'react';
import { StyledBtn, ButtonContainer } from './styles';

const Button = () => {
  return (
    <ButtonContainer>
      <h2>Button</h2>
      <div>
        <div className="primary-btn-set">
          <StyledBtn
            size="large"
            border="type1"
            theme="type3"
            onClick={() => alert('버튼을 만들어보세요')}
          >
            Large Primary
          </StyledBtn>
          <StyledBtn size="medium" theme="type1">
            Medium
          </StyledBtn>
          <StyledBtn size="small" theme="type1">
            Small
          </StyledBtn>
        </div>

        <div className="negative-btn-set">
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
      </div>
    </ButtonContainer>
  );
};

export default Button;
