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
            defaultValue={props.data?.fetchProduct?.seller}
          ></S.Input>
          <S.Input
            onChange={props.onChangeProduct}
            placeholder="Product"
            defaultValue={props.data?.fetchProduct?.name}
          ></S.Input>
          <S.Input
            onChange={props.onChangeDetail}
            placeholder="Detail"
            defaultValue={props.data?.fetchProduct?.detail}
          ></S.Input>
          <S.Input
            onChange={props.onChangePrice}
            placeholder="Price"
            defaultValue={props.data?.fetchProduct?.price}
          ></S.Input>
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
