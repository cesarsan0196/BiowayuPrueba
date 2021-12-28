import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import useStore from "../context/StoreContext";

const ProductRow = ({ item }) => {
  
  const { removeLineItem } = useStore()
  const { quantity, product } = item

  return <div>
    <div>
      <GatsbyImage image src={product.images[0]?.src} alt={product.title} />
      <h2>{product.title}</h2>
    </div>
    <h2>{quantity}</h2>
    <button onClick={() => removeLineItem(product.variants[0]?.shopifyId)}>Remove</button>
  </div>
}

export default ProductRow