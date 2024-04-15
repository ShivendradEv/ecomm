import { React, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// import Product from '../components/commerce/Product'

const ProductList = () => {

  // const [categoryName, setCategoryName] = useState("");
  let category = useParams();

  useEffect(() => {
    //setCategoryName(category.category.toLocaleLowerCase())
  },[category, category.category]);

  return (
    <div className='container'>
      <div className='products-grid products-grid-4'>
          {/* <Product category={categoryName} limit={4} /> */}
      </div>
    </div>
  )
}

export default ProductList
