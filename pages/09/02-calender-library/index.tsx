import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
import { useState } from "react";

export default function CalenderLibraryPage() {
  const [dateString, setDateString] = useState("");
  const [dateMonth, setDateMonth] = useState("");

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDateString(dateString);
    setDateMonth(`${date.month() + 1} 월`);
  };

  return (
    <>
      <div>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
      </div>
      <span>{dateString}</span>
      <br />
      <span>{dateMonth}</span>
    </>
  );
}
