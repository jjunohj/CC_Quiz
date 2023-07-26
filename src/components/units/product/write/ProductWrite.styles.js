import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #bdbdbd;
  padding: 0px 16px;
  box-sizing: border-box;
  margin-bottom: 8px;
`;

export const Button = styled.button`
  width: 179px;
  height: 52px;
  background-color: #ffd600;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 40px;
  cursor: pointer;
`;
