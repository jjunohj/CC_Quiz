import * as S from "./ProductWrite.styles";

export default function ProductWriteUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Title>상품 {props.isEdit ? "수정" : "등록"}</S.Title>
        <S.InputWrapper>
          <S.Input
            onChange={props.onChangeSeller}
            placeholder="Seller"
          ></S.Input>
          <S.Input
            onChange={props.onChangeProduct}
            placeholder="Product"
          ></S.Input>
          <S.Input
            onChange={props.onChangeDetail}
            placeholder="Detail"
          ></S.Input>
          <S.Input onChange={props.onChangePrice} placeholder="Price"></S.Input>
        </S.InputWrapper>
        <S.Button
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정" : "등록"} 하기
        </S.Button>
      </S.Wrapper>
    </>
  );
}
