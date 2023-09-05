import { styled } from "styled-components";

export const Wrap = styled.div`
  border: 3px solid lightgrey;
  margin-top: 30px;
  height: 200px;
  overflow: hidden;
`;

export const SelectButton = styled.button`
  width: 245px;
  height: 40px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 10px;
  cursor: pointer;
`;

export const LanguageUl = styled.ul`
  width: 245px;
  height: 40px;
  margin: 0;
  padding-left: 0;
  list-style: none;
  position: absolute;
`;

export const LanguageLi = styled.li`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
    border-radius: 5px;
  }
  &:first-child {
    border-top: 1px solid lightgrey;
    border-radius: 5px;
  }
  &:last-child {
    border-bottom: 1px solid lightgrey;
    border-radius: 5px;
  }
`;
