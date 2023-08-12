import { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function ModalAndPostcodePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setAddress(fullAddress);
  };

  return (
    <>
      <button onClick={showModal}>모달열기</button>
      <Modal
        title="주소검색"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal>
      <div>{address}</div>
    </>
  );
}
