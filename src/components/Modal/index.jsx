import React from "react";
import Button from "../Button";
import { Section, BtnDiv, Div } from "./styles";

const ModalF = ({ onClick }) => {
  return (
    <Div>
      <Section>
        <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
        <BtnDiv>
          <Button color="#F7A08F" size="small" onClick={onClick}>
            닫기
          </Button>
          <Button size="small" onClick={onClick}>
            확인
          </Button>
        </BtnDiv>
      </Section>
    </Div>
  );
};

export default ModalF;
