import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductList = () => {

  let category = useParams();

  useEffect(() => {
    console.log(category.category.toLocaleLowerCase())
  },[category]);

  return (
    <div>
      PLP Page
    </div>
  )
}

export default ProductList
