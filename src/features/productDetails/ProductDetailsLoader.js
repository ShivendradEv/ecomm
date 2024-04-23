import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductDetailsLoader = () => {
  return (
    <div className='pdp-skeleton'>
        <div className='thumbnail'>
            <Skeleton style={{ display: "inline-block", position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}/>
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