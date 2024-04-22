import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductDetailsLoader = () => {
  return (
    <div className='pdp-skeleton'>
        <div className='thumbnail'>
            <Skeleton height={410}/>
        </div>
        <div className='content'>
            <Skeleton height={43}/>
            <Skeleton style={{ marginBottom: "20px" }} height={35}/>
            <Skeleton style={{ marginTop: "20px", marginBottom: "5px" }} height={24}/>
            <Skeleton count={2} height={24}/>
            <Skeleton style={{ marginTop: "20px" }} height={45}/>
        </div>
    </div>
  )
}

export default ProductDetailsLoader