import { React, useEffect, useState } from 'react'
import axios from '../../util/axios'

const Product = ({category, limit}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log("hello")
        let requestUrl;
        if(category !== '') {
            requestUrl = `/products/category/${category}?limit=${limit}`;
        }
        else {
            requestUrl = `/products?limit=${limit}`;
        }
        axios
        .get(`${requestUrl}`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    },[category, limit]);

  return (
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
  );
}

export default Product
