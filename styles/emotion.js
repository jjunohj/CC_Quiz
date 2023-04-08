import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 640px;
  height: 1095px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 10px gray;
  box-sizing: border-box;
  border-radius: 6px;
`;

export const SearchWrapper = styled.div`
  width: 640px;
  height: 103px;
  padding: 40px 52px;
  display: flex;
  justify-content: end;
  align-items: center;
  box-sizing: border-box;
`;

export const Search = styled.img`
  width: 30px;
  height: 30px;
`;

export const Topper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;
`;

export const Profile = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 1rem;
`;

export const ProfileName = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  text-align: center;
`;

export const ProfileDetail = styled.img`
  width: 28px;
  height: 28px;
`;

export const MyPageNavigator = styled.div`
  width: 100%;
  height: 128px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: end;
  border-bottom: 1px solid #cacaca;
`;

export const MyPageNavButton = styled.button`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 43px;
  text-align: center;

  border: none;
  padding: 30px 20px;
  background: none;
  color: #cacaca;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  height: 695px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: scroll;
  border-bottom: 1px solid #cacaca;
  box-sizing: border-box;
`;

export const QuestionWrapper = styled.div`
  width: 100%;
  height: 116px;
  padding: 28px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Question = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const QuestionNumber = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;

  color: #adadad;
`;

export const QuestionTitle = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
`;

export const QuestionArrow = styled.img`
  width: 60px;
  height: 60px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
`;

export const FooterButton = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
`;

export const FooterButtonImg = styled.img`
  height: 40px;
  filter: drop-shadow(0px 0px 0.5px gray);
  margin-bottom: 6px;
`;

export const FooterButtonSpan = styled.span`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: center;

  color: #adadad;
`;
