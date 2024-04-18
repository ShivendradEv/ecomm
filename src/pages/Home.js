import React from 'react'
import ProductList from '../features/productList/ProductList';

const Home = () => {
  return (
    <>
      <div className='container'>
        <h1 className='heading2'>Jewelery</h1>
        <div>
          <ProductList category={"electronics"} limit={4} grid={"4"} />
        </div>
        <h1 className='heading2'>Electronics</h1>
        <div>
          <ProductList category={"jewelery"} limit={4} grid={"4"} />
        </div>
        <h1 className='heading2'>Men's clothing</h1>
        <div>
          <ProductList category={"men's%20clothing"} limit={4} grid={"4"} />
        </div>
        <h1 className='heading2'>Women's clothing</h1>
        <div>
          <ProductList category={"women's%20clothing"} limit={4} grid={"4"} />
        </div>
      </div>
    </>
  )
}

export default Home
