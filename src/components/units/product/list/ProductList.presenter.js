import * as S from "./ProductList.styles";

export default function ProductListUI(props) {
  return (
    <>
      {props.data?.fetchProducts.map((el) => (
        <S.Row key={el._id}>
          <S.Column>
            <input
              id={el._id}
              type="checkbox"
              onClick={props.onClickCheckBox}
            ></input>
          </S.Column>
          <S.Column>{el.seller}</S.Column>
          <S.Column>{el.name}</S.Column>
          <S.Column>{el.price}</S.Column>
          <S.Column>
            <button id={el._id} onClick={props.onClickDeleteButton}>
              삭제
            </button>
          </S.Column>
        </S.Row>
      ))}
    </>
  );
}
