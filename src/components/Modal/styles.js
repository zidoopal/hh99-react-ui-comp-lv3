import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 240px;

  background: #faeded;
  border-radius: 15px;
  box-shadow: 0 0 10px 3px rgba(70, 100, 100, 0.3);

  margin: 0px auto;
  padding: 30px;

  .modal-btn {
    margin: auto;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  inset: 0px;
  position: fixed;

  background-color: rgba(225, 225, 225, 0.5);
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 150px;
  padding: 30px 20px;
  background-color: white;
  border-radius: 20px;

  .modal-btn__set {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 1.1rem;
    text-align: center;
    margin-top: 20px;
    line-height: 1.3;
  }
`;
