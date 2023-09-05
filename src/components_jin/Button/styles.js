import { styled, css } from "styled-components";

export const StyledButton = styled.button`
  /* 공통 스타일 */
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 개별 스타일 */
  ${(props) =>
    props.$size === "large" &&
    css`
      height: 50px;
      width: 200px;
    `}
  ${(props) =>
    props.$size === "medium" &&
    css`
      height: 45px;
      width: 130px;
    `}
  ${(props) =>
    props.$size === "small" &&
    css`
      height: 40px;
      width: 100px;
    `}
  background: ${(props) => (props.$primary ? "white" : props.$color)};
  color: ${(props) => (props.$primary ? props.$color : "black")};
  font-weight: ${(props) => (props.$primary ? "600" : "")};
  border: ${(props) => (props.$primary ? `3px solid ${props.$color}` : "none")};
`;
