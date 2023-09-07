import React from 'react';
import { StyledBtn, ButtonContainer } from './styles';

const CustomButton = ({ size, border, theme, onClick, children }) => (
  <StyledBtn size={size} border={border} theme={theme} onClick={onClick}>
    {children}
  </StyledBtn>
);

const Button = () => {
  return (
    <ButtonContainer>
      <h2>Button</h2>
      <div>
        <div className="primary-btn-set">
          <CustomButton
            size="large"
            border="type1"
            theme="type3"
            onClick={() => alert('버튼을 만들어보세요')}
          >
            Large Primary
          </CustomButton>
          <CustomButton size="medium" theme="type1">
            Medium
          </CustomButton>
          <CustomButton size="small" theme="type1">
            Small
          </CustomButton>
        </div>

        <div className="negative-btn-set">
          <CustomButton
            size="large"
            border="type2"
            onClick={() => {
              const userInput = prompt('어렵나요?');
              console.log(userInput);
            }}
          >
            Large Negative
          </CustomButton>
          <CustomButton size="medium" theme="type2">
            Medium
          </CustomButton>
          <CustomButton size="small" theme="type2">
            Small
          </CustomButton>
        </div>
      </div>
    </ButtonContainer>
  );
};

export default Button;
