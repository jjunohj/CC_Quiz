import { useState } from "react";
import { Rate } from "antd";
// const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function StarLibraryPage() {
  const [value, setValue] = useState(3);

  const alertValue = (value: number) => {
    setValue(value);
    alert(`${value}점`);
  };

  return (
    <>
      <div>
        <Rate onChange={alertValue} value={value} />
      </div>
      {value ? <span className="ant-rate-text">{value}점</span> : ""}
    </>
  );
}
