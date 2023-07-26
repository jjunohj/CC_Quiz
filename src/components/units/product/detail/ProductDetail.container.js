import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "./ProductDetail.queries";
import ProductDetailUI from "./ProductDetail.presenter";

export default function ProductDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });

  const onClickMoveToEdit = () => {
    router.push(`/08/${router.query.productId}/edit`);
  };

  return (
    <ProductDetailUI
      id={router.query.productId}
      data={data}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
