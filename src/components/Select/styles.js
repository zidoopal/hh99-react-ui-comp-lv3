import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 520px;

  background: #faeded;
  border-radius: 15px;
  box-shadow: 0 0 10px 3px rgba(70, 100, 100, 0.3);

  margin: 0px auto;
  padding: 30px;

  label,
  li {
    color: white;
    font-size: 1rem;
  }

  h2:last-of-type {
    margin-top: 130px;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  /* position: relative; */

  .hidden {
    height: 100%;
    overflow: hidden;
  }
`;

export const Selectbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  background-color: var(--main-hotpink);
  width: 100%;
  height: 40px;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  label,
  icon {
    padding: 0px 20px;
  }
`;

export const Dropdown = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  height: 160px;
  margin-top: 8px;
  /* <SelectOptions/>가 props에 상태에 따라 다르게 보일 수 있도록 
  max-height: ${(props) => (props.show ? 'none' : '0')};을 추가 */
  max-height: ${(props) => (props.$show ? 'none' : '0')};
  overflow: hidden;
  border-radius: 15px;
  list-style: none;
  background-color: var(--main-mint);
  color: white;
`;
export const OptionList = styled.li`
  font-size: 14px;

  padding: 9px 15px;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: lightblue;
  }
`;
