import axios from "axios";
import { useState } from "react";

export default function restAPIPractice() {
  const onClickGet = async () => {
    const result = await axios.get("https://koreanjson.com/users");
    console.log(result);
  };

  return <button onClick={onClickGet}>REST-API 요청하기</button>;
}
