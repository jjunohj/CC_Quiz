import styled from "@emotion/styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Wrapper = styled.div`
  width: 100%;
  height: 600px;
  background-color: pink;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <img src="https://marketplace.canva.com/EAFJWEVCYas/1/0/1600w/canva-%EB%B0%9D%EC%9D%80-%EC%B4%88%EB%A1%9D%EC%83%89-%EC%96%B4%EB%A6%B0%EC%9D%B4-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EC%96%B4%EB%A6%B0%EC%9D%B4%EB%82%A0-%EA%B8%B0%EB%85%90-%EB%B0%B0%EB%84%88-zm95v57esIM.jpg"></img>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </Wrapper>
  );
}
