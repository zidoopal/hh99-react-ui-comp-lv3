import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  width: 100%;
  height: 520px;

  background: #faeded;
  border-radius: 15px;
  box-shadow: 0 0 10px 3px rgba(70, 100, 100, 0.3);

  margin: 0px auto;
  padding: 30px;

  .primary-btn-set,
  .negative-btn-set {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
`;

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 0.5rem;
  border-radius: 1.2rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);

  width: ${(props) => {
    switch (props.size) {
      case 'large':
        return '260px';
      case 'medium':
        return '170px';
      case 'small':
        return '100px';
      case 'xsmall':
      default:
        return '60px';
    }
  }};

  height: ${(props) => {
    switch (props.size) {
      case 'large':
        return '55px';
      case 'medium':
        return '50px';
      case 'small':
        return '45px';
      default:
        return '40px';
    }
  }};

  color: ${(props) => {
    switch (props.theme) {
      case 'type1':
      case 'type2':
        return 'white';
      case 'type3':
        return 'var(--main-mint)';
      default:
        return 'var(--main-hotpink)';
    }
  }};

  background: ${(props) =>
    props.theme === 'type1'
      ? 'var(--main-mint)'
      : props.theme === 'type2'
      ? 'var(--main-hotpink)'
      : 'white'};

  border: ${(props) =>
    props.$border === 'type1'
      ? '4px solid var(--main-mint)'
      : props.$border === 'type2'
      ? '4px solid var(--main-hotpink)'
      : 'black'};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(1);
    box-shadow: none;
  }
`;
