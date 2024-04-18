import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailsComp from '../features/productDetails/ProductDetails';

const ProductDetails = () => {

  const [productId, setProductId] = useState("");
  let getProductId = useParams();

  useEffect(() => {
    setProductId(getProductId.productId.toLocaleLowerCase())
  },[getProductId]);

  return (
    <div className='container'>
      <div className=''>
        <ProductDetailsComp id={productId}/>
      </div>
    </div>
  )
}

export default ProductDetails
