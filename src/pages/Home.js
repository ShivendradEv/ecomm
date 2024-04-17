import React from 'react'
// import Product from '../components/commerce/Product'
import ProductList from '../features/ProductList/ProductList';

const Home = () => {
  return (
    <>
      <div className='container'>
        <h1 className='heading2'>Jewelery</h1>
        <div className=''>
          <ProductList category={"jewelery"} limit={4} grid={"4"} />
        </div>
        <h1 className='heading2'>Electronics</h1>
        <div className=''>
          <ProductList category={"electronics"} limit={4} grid={"4"} />
        </div>
        <h1 className='heading2'>Men's clothing</h1>
        <div className=''>
          <ProductList category={"men's clothing"} limit={4} grid={"4"} />
        </div>
        <h1 className='heading2'>Women's clothing</h1>
        <div className=''>
          <ProductList category={"women's clothing"} limit={4} grid={"4"} />
        </div>
      </div>
    </>
  )
}

export default Home
