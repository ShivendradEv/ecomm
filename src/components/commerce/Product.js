import { React, useEffect } from 'react'
import Loader from '../layout/Loader';
import { getProducts } from '../../store/actionType/ProductList';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const Product = ({category, limit}) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products, shallowEqual);
    const loader = useSelector(state => state.products.loader, shallowEqual);
    
    console.log("productList: ", products);
    console.log("loader: ", loader);
    
    useEffect(() => {
        dispatch(getProducts(category, limit))
    },[dispatch, category, limit]);

  return (
    <>
        { loader && <Loader/> }
        {products.length > 0 && (
            <>
                {products.map((product, index) => {
                    return (
                        <div key={index} className='product'>
                            <div className='thumbnail'>
                                <img src={product.image} alt={product.title}/>
                                <p className='category'>{product.category}</p>
                            </div>
                            <div className='content'>
                                <h2 className='title'>{product.title}</h2>
                                <div className='price-main'>
                                    <p className='price'>&#x20b9;{product.price}</p>
                                    <p className='rating'>{product.rating.rate} &#9733;</p>
                                </div>
                                <button className='cart-btn'>Add to cart</button>
                            </div>
                            
                        </div>
                    );
                })}
            </>
        )}
        
    </>
  );
}

export default Product
