// eslint-disable-next-line no-unused-vars
import React from "react";

function Product(props) {
  return (
    <div>
      <div>
        <h3>Urun Bilgiler</h3>
        <hr />
        <div>{props.productName}</div>
        <div>{props.price}</div>
      </div>
    </div>
  );
}

export default Product;
