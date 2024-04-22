import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetailsActions } from './ProductDetailsSlice';
import ProductDetailsLoader from './ProductDetailsLoader';
 
const ProductDetails = (productId) => {

    const products = useSelector((state) => state.productDetails.productDetails);
    const loading = useSelector((state) => state.productDetails.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ProductDetailsActions.getAll(productId));
    },[dispatch, productId]);

    return (
        <div>
            {loading ? (
                <ProductDetailsLoader/>
            ) : (
                <>
                <div className={'product-details'}>
                        <div className='details-thumbnail'>
                            <img src={products?.thumbnail} alt={products?.title}/>
                            <p className='category'>{products?.category}</p>
                        </div>
                        <div className='details-content'>
                            <h2 className='title'>{products?.title}</h2>
                            <p className='rating'>{products?.rating} &#9733;</p>
                            <p className='price'>&#x20b9;{products?.price}</p>
                            <div className='description'>
                                {products?.description} <br/>
                                Only {products?.stock} units left
                            </div>
                            <button className='cart-btn'>Add to cart</button>
                        </div>
                </div>
                </>
            )}
        </div>
    )
}

export default ProductDetails