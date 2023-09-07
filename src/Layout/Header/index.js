import React from 'react';
import { StyledHeader } from './styles';
import ReactLogo from '../../assets/icon/react-heart.svg';

function Header() {
  return (
    <StyledHeader>
      <h1 className="template-title">
        L &nbsp;
        <img src={ReactLogo} className="react-logo" alt="logo" />
        VE React
      </h1>
    </StyledHeader>
  );
}
export default Header;
