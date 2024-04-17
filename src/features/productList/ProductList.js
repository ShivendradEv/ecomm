import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductListActions } from './ProductListSlice';
 
const ProductList = (productParams) => {

    const products = useSelector((state) => state.productList.products);
    const loading = useSelector((state) => state.productList.loading);
    const dispatch = useDispatch();
    console.log(loading);
    console.log(products);

    useEffect(() => {
        dispatch(ProductListActions.getAll(productParams));
    },[dispatch, productParams])

    return (
        <div>
            {loading ? (
                <p>Loading products...</p>
            ) : (
                <div className={`products-grid products-grid-${productParams.grid}`}>
                    {products.map((product, index) => (
                        <>
                        <div key={index} className='product'>
                            <div className='thumbnail'>
                                <img src={product.image} alt={product.title}/>
                                <p className='category'>{product.category}</p>
                            </div>
                            <div className='content'>
                                <h2 className='title'>{product.title}</h2>
                                <div className='price-main'>
                                    <p className='price'>&#x20b9;{product.price}</p>
                                    {/* <p className='rating'>{product.rating.rate} &#9733;</p> */}
                                </div>
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                        </div>
                        </>
                    ))}
                </div>
            )}
        </div>
    )
}

export default ProductList