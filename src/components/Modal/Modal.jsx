import { StyledBtn } from '../Button/styles';
import { ModalWrapper, StyledModal } from './styles';

const CustomModal = ({ isOpen, onClose, clickOutsideClose, children }) => (
  <>
    {isOpen && (
      <ModalWrapper onClick={clickOutsideClose ? onClose : undefined}>
        {/* StyledModal 내부 클릭 이벤트 >> ModalWrapper로 버블링되는 것 방지 */}
        <StyledModal onClick={(e) => e.stopPropagation()}>
          {children}
        </StyledModal>
      </ModalWrapper>
    )}
  </>
);

const Modal = ({
  isSmallModalOpen,
  isLargeModalOpen,
  setIsSmallModalOpen,
  setIsLargeModalOpen,
}) => {
  return (
    <div>
      <div>
        <CustomModal
          isOpen={isSmallModalOpen}
          onClose={() => setIsSmallModalOpen(false)}
          clickOutsideClose={false}
        >
          <p>
            닫기와 확인 버튼 2개가 있고, <br /> 외부 영역을 눌러도 모달이 닫히지
            않아요.
          </p>
          <div className="modal-btn__set">
            <StyledBtn
              size="small"
              theme="type2"
              onClick={() => setIsSmallModalOpen(false)}
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
        </CustomModal>

        <CustomModal
          isOpen={isLargeModalOpen}
          onClose={() => setIsLargeModalOpen(false)}
          clickOutsideClose={true}
        >
          <p>
            닫기 버튼 1개가 있고, <br /> 외부 영역을 누르면 모달이 닫혀요.
          </p>
          <StyledBtn onClick={() => setIsLargeModalOpen(false)}>X</StyledBtn>
        </CustomModal>
      </div>
    </div>
  );
};

export default Modal;
