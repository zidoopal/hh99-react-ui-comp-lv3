import React from 'react';
import { useState } from 'react';
import { StyledBtn } from '../Button/styles';
import { ModalContainer, StyledModal } from '../Modal/styles';

const Modal = () => {
  const [OpenSmallBtnModal, setOpenSmallBtnModal] = useState(false);
  const [OpenLargeBtnModal, setOpenLargeBtnModal] = useState(false);

  return (
    <>
      <h1>Modal</h1>
      <div>
        <StyledBtn
          size="small"
          theme="type1"
          onClick={() => setOpenSmallBtnModal(!OpenSmallBtnModal)}
        >
          open modal
        </StyledBtn>
        <StyledBtn
          size="large"
          theme="type2"
          onClick={() => setOpenLargeBtnModal(!OpenLargeBtnModal)}
        >
          open modal
        </StyledBtn>
      </div>
      <div>
        {OpenSmallBtnModal && (
          <>
            <ModalContainer>
              <StyledModal>
                <p>
                  닫기와 확인 버튼 2개가 있고,
                  <br />
                  외부 영역을 눌러도 모달이 닫히지 않아요.
                </p>
                <div className="btn-set">
                  <StyledBtn
                    size="small"
                    theme="type2"
                    onClick={() => setOpenSmallBtnModal(!OpenSmallBtnModal)}
                  >
                    닫기
                  </StyledBtn>
                  <StyledBtn
                    size="small"
                    theme="type1"
                    onClick={() => console.log('on!')}
                  >
                    확인
                  </StyledBtn>
                </div>
              </StyledModal>
            </ModalContainer>
          </>
        )}
        {OpenLargeBtnModal && (
          <>
            <ModalContainer
              onClick={() => setOpenLargeBtnModal(!OpenLargeBtnModal)}
            >
              <StyledModal>
                <div className="modal-bg"></div>
                <p>
                  닫기 버튼 1개가 있고,
                  <br />
                  외부 영역을 누르면 모달이 닫혀요.
                </p>
                <StyledBtn
                  onClick={() => setOpenLargeBtnModal(!OpenLargeBtnModal)}
                >
                  X
                </StyledBtn>
              </StyledModal>
            </ModalContainer>
          </>
        )}
      </div>
    </>
  );
};

export default Modal;
