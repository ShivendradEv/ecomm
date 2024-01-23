import { React, useEffect, useState } from 'react'
import axios from '../../util/axios'

const Product = ({limit}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios
        .get(`/products?limit=${limit}`)
        .then((response) => setProducts(response.data))
        .catch((error) => console.log(error));
    },[limit]);

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
