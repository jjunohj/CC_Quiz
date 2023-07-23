import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { CREATE_PRODUCT } from "./ProductRegister.queries";
import ProductRegisterUI from "./ProductRegister.presenter";

export default function ProductRegister() {
  const [productSeller, setProductSeller] = useState("");
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [createProduct] = useMutation(CREATE_PRODUCT);

  const router = useRouter();

  const handleProductSellerChange = (event) => {
    setProductSeller(event.target.value);
  };

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductDetailChange = (event) => {
    setProductDetail(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(parseInt(event.target.value));
  };

  const onClickSubmit = async () => {
    try {
      const result = await createProduct({
        variables: {
          seller: productSeller,
          createProductInput: {
            name: productName,
            detail: productDetail,
            price: productPrice,
          },
        },
      });
      console.log(result.data.createProduct._id);
      router.push(`/06/boards/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <ProductRegisterUI
      productSeller={productSeller}
      productName={productName}
      productDetail={productDetail}
      productPrice={productPrice}
      handleProductSellerChange={handleProductSellerChange}
      handleProductNameChange={handleProductNameChange}
      handleProductDetailChange={handleProductDetailChange}
      handleProductPriceChange={handleProductPriceChange}
      onClickSubmit={onClickSubmit}
    />
  );
}
