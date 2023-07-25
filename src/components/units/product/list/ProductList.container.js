import ProductListUI from "./ProductList.presenter";
import { FETCH_PRODUCTS, DELETE_PRODUCT } from "./ProductList.queries";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";

export default function ProductList() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCTS);
  const [isCheck, setIsCheck] = useState(false);

  const onClickCheckBox = (event) => {
    setIsCheck(!isCheck);
  };

  const onClickDeleteButton = async (event) => {
    if (isCheck) {
      DeleteMutation(event);
    }
  };

  const DeleteMutation = async (event) => {
    await deleteProduct({
      variables: {
        productId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return (
    <ProductListUI
      data={data}
      onClickCheckBox={onClickCheckBox}
      onClickDeleteButton={onClickDeleteButton}
    />
  );
}
