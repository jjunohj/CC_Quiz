import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID!) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function dynamicRoutingQuery() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.productId },
  });
  console.log(data);
  return (
    <>
      <div>상품 상세 페이지입니다.</div>
      <div>상품 ID는 {router.query.productId}입니다.</div>
      <div>
        상품의 판매자는 {data ? data.fetchProduct.seller : "loading..."}입니다.
      </div>
      <div>
        상품의 이름은 {data ? data.fetchProduct.name : "loading..."}입니다.
      </div>
      <div>
        상품의 상세정보는 {data ? data.fetchProduct.detail : "loading..."}
        입니다.
      </div>
      <div>
        상품의 가격은 {data ? data.fetchProduct.price : "loading..."}입니다.
      </div>
    </>
  );
}
