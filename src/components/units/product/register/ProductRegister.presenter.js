export default function ProductRegisterUI(props) {
  return (
    <>
      <input
        type="text"
        value={props.productSeller}
        placeholder="Product Seller"
        onChange={props.handleProductSellerChange}
      ></input>
      <input
        type="text"
        value={props.productName}
        placeholder="Product Name"
        onChange={props.handleProductNameChange}
      ></input>
      <input
        type="text"
        value={props.productDetail}
        placeholder="Product Detail"
        onChange={props.handleProductDetailChange}
      ></input>
      <input
        type="number"
        value={props.productPrice}
        placeholder="Product Price"
        onChange={props.handleProductPriceChange}
      ></input>
      <button onClick={props.onClickSubmit}>상품 등록</button>
    </>
  );
}
