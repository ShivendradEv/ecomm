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
      <h1 className='heading2'>{categoryName}</h1>
      <div className=''>
        <ProductListComp category={categoryName} limit="4" grid={"4"}/>
      </div>
    </div>
  )
}

export default ProductList
