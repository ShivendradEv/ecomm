import React from 'react'
import Product from '../components/commerce/Product'

const Home = () => {
  return (
    <>
      <h1 className='prd-heading'>Featured Products</h1>
      <div className='home-products'>
        <Product limit={7} />
      </div>
    </>
  )
}

export default Home
