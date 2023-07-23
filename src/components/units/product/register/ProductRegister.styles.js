import styled from "@emotion/styled";

export const Input = styled.input`
  border: 1px solid black;
  width: 200px;
  height: 30px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${(props) => (props.isFilled ? "yellow" : "gray")};
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;
