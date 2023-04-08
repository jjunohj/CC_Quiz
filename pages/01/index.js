import {
  Wrapper,
  SearchWrapper,
  Search,
  Topper,
  Title,
  Profile,
  ProfileImage,
  ProfileName,
  ProfileDetail,
  MyPageNavigator,
  MyPageNavButton,
  Body,
  QuestionWrapper,
  Question,
  QuestionNumber,
  QuestionTitle,
  QuestionArrow,
  Footer,
  FooterButton,
  FooterButtonImg,
  FooterButtonSpan,
} from "../../styles/emotion";

export default function myPage() {
  return (
    <Wrapper>
      <SearchWrapper>
        <Search src="/search.png"></Search>
      </SearchWrapper>
      <Topper>
        <Title>마이</Title>
        <Profile>
          <ProfileImage src="/profile-image.png"></ProfileImage>
          <ProfileName>임정아</ProfileName>
          <ProfileDetail src="/arrow-right.png"></ProfileDetail>
        </Profile>
      </Topper>
      <MyPageNavigator>
        <MyPageNavButton>공지사항</MyPageNavButton>
        <MyPageNavButton>이벤트</MyPageNavButton>
        <MyPageNavButton>FAQ</MyPageNavButton>
        <MyPageNavButton>Q&A</MyPageNavButton>
      </MyPageNavigator>
      <Body>
        <QuestionWrapper>
          <Question>
            <QuestionNumber>Q.01</QuestionNumber>
            <QuestionTitle>리뷰 작성은 어떻게 하나요?</QuestionTitle>
          </Question>
          <QuestionArrow src="/arrow-bottom.png"></QuestionArrow>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>
            <QuestionNumber>Q.02</QuestionNumber>
            <QuestionTitle>리뷰 수정/삭제는 어떻게 하나요?</QuestionTitle>
          </Question>
          <QuestionArrow src="/arrow-bottom.png"></QuestionArrow>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>
            <QuestionNumber>Q.03</QuestionNumber>
            <QuestionTitle>아이디/비밀번호를 잊어버렸어요.</QuestionTitle>
          </Question>
          <QuestionArrow src="/arrow-bottom.png"></QuestionArrow>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>
            <QuestionNumber>Q.04</QuestionNumber>
            <QuestionTitle>회원탈퇴를 하고싶어요.</QuestionTitle>
          </Question>
          <QuestionArrow src="/arrow-bottom.png"></QuestionArrow>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>
            <QuestionNumber>Q.05</QuestionNumber>
            <QuestionTitle>출발지 설정은 어떻게 하나요?</QuestionTitle>
          </Question>
          <QuestionArrow src="/arrow-bottom.png"></QuestionArrow>
        </QuestionWrapper>
        <QuestionWrapper>
          <Question>
            <QuestionNumber>Q.06</QuestionNumber>
            <QuestionTitle>비밀번호를 변경하고 싶어요.</QuestionTitle>
          </Question>
          <QuestionArrow src="/arrow-bottom.png"></QuestionArrow>
        </QuestionWrapper>
      </Body>
      <Footer>
        <FooterButton>
          <FooterButtonImg src="/home.png"></FooterButtonImg>
          <FooterButtonSpan>홈</FooterButtonSpan>
        </FooterButton>
        <FooterButton>
          <FooterButtonImg src="/location.png"></FooterButtonImg>
          <FooterButtonSpan>잇츠로드</FooterButtonSpan>
        </FooterButton>
        <FooterButton>
          <FooterButtonImg src="/like.png"></FooterButtonImg>
          <FooterButtonSpan>마이찜</FooterButtonSpan>
        </FooterButton>
        <FooterButton>
          <FooterButtonImg src="/mypage.png"></FooterButtonImg>
          <FooterButtonSpan>마이</FooterButtonSpan>
        </FooterButton>
      </Footer>
    </Wrapper>
  );
}
