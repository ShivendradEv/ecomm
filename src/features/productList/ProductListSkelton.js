import React from 'react'
import Skeleton from 'react-loading-skeleton'

const ProductListSkeltopn = ({cards}) => {
  return (
    Array(cards).fill(0).map(() => 
    <div className='pl-skeleton' key={Math.trunc(Math.random(1) * 100)}>
        <div className='thumbnail'>
            <Skeleton style={{ display: "inline-block", position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}/>
        </div>
        <div className='content'>
          <div className='title'>
            <Skeleton style={{ display: "inline-block", position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}/>
          </div>
          <div className='price'>
            <Skeleton style={{ display: "inline-block", position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}/>
          </div>
          <div className='btn'>
            <Skeleton style={{ display: "inline-block", position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}/>
          </div>
        </div>
    </div>)
  )
}

export default ProductListSkeltopn