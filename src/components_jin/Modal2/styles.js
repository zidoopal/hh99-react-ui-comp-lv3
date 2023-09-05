import { styled } from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(228, 228, 228, 0.8);
`;

export const Section = styled.section`
  width: 300px;
  height: 200px;
  padding: 24px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 12px;
`;

export const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  border: 1px solid rgb(221, 221, 221);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }
`;
