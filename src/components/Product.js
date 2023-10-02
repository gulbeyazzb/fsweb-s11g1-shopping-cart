import React from "react";
import { ScProduct } from "./scParts";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Product = (props) => {
  const { addItem, count } = useContext(ProductContext);

  return (
    <ScProduct>
      <img src={props.product.image} alt={`${props.product.title} book`} />
      <div className="details">
        <h1 className="title">{props.product.title}</h1>
        <div className="footer">
          <p className="price">${props.product.price}</p>
          <button onClick={() => addItem(props.product)}>
            Add to cart {count}
          </button>
        </div>
      </div>
    </ScProduct>
  );
};

export default Product;
