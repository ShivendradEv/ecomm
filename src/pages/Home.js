import React from 'react'
import ProductList from '../features/productList/ProductList';

const Home = () => {
  return (
    <>
      <div className='container'>
        <h1 className='heading2'>All Products</h1>
        <ProductList category={""} limit={4} cards={4} pagination={true} grid={4} skip={0}/>
        <h1 className='heading2'>smartphones</h1>
        <ProductList category={"smartphones"} limit={4} cards={4} pagination={false} grid={4}/>
        <h1 className='heading2'>laptops</h1>
        <ProductList category={"laptops"} limit={4} cards={4} pagination={false} grid={4}/>
        <h1 className='heading2'>sunglasses</h1>
        <ProductList category={"sunglasses"} limit={4} cards={4} pagination={false} grid={4}/>
        <h1 className='heading2'>automotive</h1>
        <ProductList category={"automotive"} limit={4} cards={4} pagination={false} grid={4}/>
      </div>
    </>
  )
}

export default Home
