import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function dynamicRouting() {
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
    console.log(productSeller, productName, productDetail, productPrice);
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
      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    <>
      <input
        type="text"
        value={productSeller}
        placeholder="Product Seller"
        onChange={handleProductSellerChange}
      ></input>
      <input
        type="text"
        value={productName}
        placeholder="Product Name"
        onChange={handleProductNameChange}
      ></input>
      <input
        type="text"
        value={productDetail}
        placeholder="Product Detail"
        onChange={handleProductDetailChange}
      ></input>
      <input
        type="number"
        value={productPrice}
        placeholder="Product Price"
        onChange={handleProductPriceChange}
      ></input>
      <button onClick={onClickSubmit}>상품 등록</button>
    </>
  );
}
