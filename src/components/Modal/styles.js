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
  width: 500px;
  height: 300px;
  padding: 24px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  border-radius: 15px;
`;

export const BtnDiv = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 5px;
`;
