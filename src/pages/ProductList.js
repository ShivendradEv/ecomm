import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductListComp from '../features/productList/ProductList';

const ProductList = () => {

  const [categoryName, setCategoryName] = useState("");
  let category = useParams();

  useEffect(() => {
    setCategoryName(category.category.toLocaleLowerCase())
  },[category, category.category]);

  return (
    <div className='container'>
      <div className='product-main'>
        <h1 className='heading2'>{categoryName}</h1>
        <ProductListComp category={categoryName} limit="1" cards={1} grid={4} pagination={true} skip={0}/>
      </div>
    </div>
  )
}

export default ProductList
