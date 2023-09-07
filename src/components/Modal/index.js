import React from 'react';
import { useState } from 'react';
import { StyledBtn } from '../Button/styles';
import CustomModal from '../Modal/CustomModal';
import { ModalContainer, ModalWrapper, StyledModal } from '../Modal/styles';

const Modal = () => {
  const [OpenSmallBtnModal, setOpenSmallBtnModal] = useState(false);
  const [OpenLargeBtnModal, setOpenLargeBtnModal] = useState(false);

  return (
    <ModalContainer>
      <h2>Modal</h2>
      <div className="modal-btn-set">
        <StyledBtn
          size="small"
          theme="type1"
          onClick={() => setOpenSmallBtnModal(!OpenSmallBtnModal)}
        >
          open
        </StyledBtn>
        <StyledBtn
          size="large"
          theme="type2"
          onClick={() => setOpenLargeBtnModal(!OpenLargeBtnModal)}
        >
          open
        </StyledBtn>
      </div>
      <div>
        {OpenSmallBtnModal && (
          <>
            <ModalWrapper>
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
            </ModalWrapper>
          </>
        )}
        {OpenLargeBtnModal && (
          <ModalWrapper
            onClick={() => setOpenLargeBtnModal(!OpenLargeBtnModal)}
          >
            <StyledModal>
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
          </ModalWrapper>
        )}
      </div>
    </ModalContainer>
  );
};

export default Modal;
