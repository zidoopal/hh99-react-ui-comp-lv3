import styled, { keyframes, css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 240px;

  background: #faeded;
  border-radius: 15px;
  box-shadow: 0 0 10px 3px rgba(70, 100, 100, 0.3);

  margin: 0px auto;
  padding: 30px;

  .input__set {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0px;
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    margin-top: -5px;
  }

  input {
    width: 220px;
    margin-left: 20px;
    margin-bottom: 2px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    color: var(--main-mint);
  }
`;

const shakeAnimation = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
  
`;

export const ErrorText = styled.p`
  color: var(--main-hotpink);
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  max-height: 0px;
`;

export const PriceInput = styled.input.attrs((props) => ({}))`
  ${(props) =>
    props.$error &&
    css`
      animation: ${shakeAnimation} 0.5s;
    `}
`;
