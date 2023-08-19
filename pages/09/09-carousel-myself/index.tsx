import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Img = styled.img`
  width: 500px;
  height: 500px;
`;

const Wrapper = styled.div`
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 500px;
  height: 1000px;

  overflow: hidden;
`;

const SlideContainer = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
  width: 500px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const SlideButton = styled.div`
  width: 80px;
  padding: 20px;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: yellow;
    color: #000;
  }
`;

interface ISlideImgProps {
  img: string;
}

const SlideImg = (props: ISlideImgProps) => {
  return <Img src={props.img} />;
};

export default function MySlider() {
  const img01 = "/images/banner_example_01.png";
  const img02 = "/images/banner_example_02.png";
  const img03 = "/images/banner_example_03.png";
  // 슬라이드 갯수 (0, 1, 2)
  const totalSlide = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const onClickNext = () => {
    // 마지막 슬라이드까지 가면
    if (currentSlide >= totalSlide) {
      // 첫 번째 슬라이드로 이동
      setCurrentSlide(0);
      // 작동안함
      // return;
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const onClickPrev = () => {
    if (currentSlide === 0) {
      // 마지막 슬라이드로 이동
      setCurrentSlide(totalSlide);
      // 작동안함
      // return
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <Wrapper>
      <Container>
        <SlideContainer ref={slideRef}>
          <SlideImg img={img01} />
          <SlideImg img={img02} />
          <SlideImg img={img03} />
        </SlideContainer>
        <ButtonWrapper>
          <SlideButton onClick={onClickPrev}>Prev</SlideButton>
          <SlideButton onClick={onClickNext}>Next</SlideButton>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
}
