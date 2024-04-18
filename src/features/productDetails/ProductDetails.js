import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetailsActions } from './ProductDetailsSlice';
 
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
                <p>Loading product details...</p>
            ) : (
                <div className={'product-details'}>
                        <div className='details-thumbnail'>
                            <img src={products?.image} alt={products?.title}/>
                            <p className='category'>{products?.category}</p>
                        </div>
                        <div className='details-content'>
                            <h2 className='title'>{products?.title}</h2>
                            <div className='price-main'>
                                <p className='price'>&#x20b9;{products?.price}</p>
                                <p className='rating'>{products?.rating?.rate} &#9733;</p>
                            </div>
                            <div className='description'>
                                {products?.description}
                            </div>
                            <button className='cart-btn'>Add to cart</button>
                        </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetails