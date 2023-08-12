import styled from "@emotion/styled";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  align-items: center;
  justify-content: center;
`;

const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  background-color: gray;
  color: #ffffff;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #eaeaea;
    color: #000000;
  }
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  border: 1px solid #000;
  border-radius: 20px;
  position: absolute;
  z-index: 1;
`;

const Modal = styled.div`
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ModalContents = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const ModalCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #000000;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;

const OpenModal = (props: { onClickCloseModal: () => void }) => {
  return (
    <ModalWrapper>
      <Modal>
        <ModalContents>모달창</ModalContents>
        <ModalCloseButton onClick={props.onClickCloseModal}>
          닫기
        </ModalCloseButton>
      </Modal>
    </ModalWrapper>
  );
};

export default function ModalMyselfPage() {
  const [toggleModal, setToggleModal] = useState(false);
  const onClickOpenModal = () => {
    setToggleModal(true);
  };
  const onClickCloseModal = () => {
    setToggleModal(false);
  };
  return (
    <>
      <Container>
        {toggleModal && <OpenModal onClickCloseModal={onClickCloseModal} />}
        <Wrapper>
          <ModalButton onClick={onClickOpenModal}>모달열기</ModalButton>
        </Wrapper>
      </Container>
    </>
  );
}
