import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";
import ProductWriteUI from "./ProductWrite.presenter";

export default function ProductWrite(props) {
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  const [product, setProduct] = useState("");
  const [seller, setSeller] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
  };

  const onChangeProduct = (event) => {
    setProduct(event.target.value);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
  };

  const onChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const onClickUpdate = async () => {
    try {
      const updateVariables = {
        productId: router.query.productId,
        updateProductInput: {},
      };

      if (seller) {
        updateVariables.updateProductInput.seller = seller;
      }
      if (product) {
        updateVariables.updateProductInput.name = product;
      }
      if (detail) {
        updateVariables.updateProductInput.detail = detail;
      }
      if (price) {
        updateVariables.updateProductInput.price = Number(price);
      }

      const result = await updateProduct({
        variables: updateVariables,
      });

      alert(result.data.updateProduct.message);
      router.push(`/08/${router.query.productId}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: seller,
          createProductInput: {
            name: product,
            detail: detail,
            price: Number(price),
          },
        },
      });
      alert(result.data.createProduct.message);
      router.push(`/08/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductWriteUI
      isEdit={props.isEdit}
      data={props.data}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeSeller={onChangeSeller}
      onChangeProduct={onChangeProduct}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
    />
  );
}
