import { useState } from "react";
import { Modal } from "antd";

export default function ModalAlertPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달 열기</button>
      <Modal
        title="게시글 등록"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>게시글이 등록되었습니다.</p>
      </Modal>
    </>
  );
}
