import React, { useRef } from "react";
import { Div, Section, Button } from "./styles";

const Modal = ({ onClick }) => {
  const ref = useRef();
  const ClickHandeler = (e) => {
    if (e.target === ref.current) {
      onClick();
    }
  };
  return (
    <Div ref={ref} onClick={ClickHandeler}>
      <Section>
        <div>
          닫기와 확인 버튼 1개가 있고, <br />
          외부 영역을 누르면 모달이 닫혀요.
        </div>
        <Button onClick={onClick}>X</Button>
      </Section>
    </Div>
  );
};

export default Modal;
