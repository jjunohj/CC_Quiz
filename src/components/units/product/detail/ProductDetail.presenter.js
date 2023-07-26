export default function ProductDetailUI(props) {
  return (
    <>
      <div>상품 상세 페이지입니다.</div>
      <div>상품 ID는 {props.id}입니다.</div>
      <div>상품의 판매자는 {props.data?.fetchProduct.seller}입니다.</div>
      <div>상품의 이름은 {props.data?.fetchProduct.name}입니다.</div>
      <div>상품의 상세정보는 {props.data?.fetchProduct.detail}입니다.</div>
      <div>상품의 가격은 {props.data?.fetchProduct.price}입니다.</div>
      <button onClick={props.onClickMoveToEdit}>수정하러가기</button>
    </>
  );
}
