import * as S from "./ProductRegister.styles";

export default function ProductRegisterUI(props) {
  return (
    <>
      <S.Input
        placeholder="Product Seller"
        onChange={props.handleProductSellerChange}
      ></S.Input>
      <br />
      <S.Input
        placeholder="Product Name"
        onChange={props.handleProductNameChange}
      ></S.Input>
      <br />
      <S.Input
        placeholder="Product Detail"
        onChange={props.handleProductDetailChange}
      ></S.Input>
      <br />
      <S.Input
        placeholder="Product Price"
        onChange={props.handleProductPriceChange}
      ></S.Input>
      <br />
      <S.Button onClick={props.onClickSubmit} isFilled={props.isFilled}>
        상품 등록
      </S.Button>
    </>
  );
}
