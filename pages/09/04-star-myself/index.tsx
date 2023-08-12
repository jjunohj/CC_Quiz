import styled from "@emotion/styled";
import { useState } from "react";

export default function StarMyselfPage() {
  const StarPoint = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState(0);

  const Wrapper = styled.div`
    display: flex;
  `;

  const Star = styled.div`
    width: 50px;
    height: 50px;
    background-image: url(${(props: { active: boolean }) =>
      props.active
        ? "/images/star_activated.png"
        : "/images/star_inactivated.png"});
    background-position: center;
    background-repeat: no-repeat;
  `;

  const ResultScore = styled.div`
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
  `;

  const onClickStar = (num: number) => {
    setRating(num);
  };

  return (
    <>
      <Wrapper>
        {StarPoint.map((num) => {
          return (
            <Star
              key={num}
              active={num <= rating}
              onClick={() => onClickStar(num)}
            />
          );
        })}
      </Wrapper>
      <ResultScore>{rating}점</ResultScore>
    </>
  );
}
