import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetAllProductsQuery } from './ProductListSlice';
import 'react-loading-skeleton/dist/skeleton.css'
import ProductListSkeltopn from './ProductListSkeltopn';
 
const ProductList = (productParams) => {
    const [prdParam, setPrdParam] = useState(productParams);
    let category = productParams.category;
    let limit = productParams.limit;
    let skip = productParams.skip;
    let pagination = productParams.pagination;
    // Product Data
    const { data, isLoading, isError, isSuccess } = useGetAllProductsQuery({category,limit,skip,pagination});

    // Navigate to PDP
    const navigate = useNavigate();
    const handleClick = (prdId) => {
        navigate(`/ProductDetails/${prdId}`);
    }

    // Calculate number of buttons to show 
    const totalProducts = data?.total;
    let numButtonsToShow = useRef(0);
    if(totalProducts !== undefined) {
        const itemsPerPage = 1;
        const totalPages = Math.ceil(totalProducts / itemsPerPage);
        const maxButtonsToShow = 4;
        numButtonsToShow.current = Math.min(totalPages, maxButtonsToShow);
        if(totalPages < maxButtonsToShow) {
            numButtonsToShow.current = totalPages;
        }
    } 

    const handlePaginationClick = (e) => {
        document.querySelector(".pagination ul li.active").classList.remove("active");
        e.target.classList.add("active");
        skip = 2;
    }

    return (
        <>
            { isLoading && 
                <>
                <div className={`products-grid products-grid-${productParams.grid}`}>
                    <ProductListSkeltopn cards={productParams.cards}/>
                </div>
                </>
            }                      
            { isError && <p>Something went wrong...</p> }
            { isSuccess && (
                <>  
                <div className={`products-grid products-grid-${productParams.grid}`}>
                    {data.products?.map((product, index) => (
                        <div className='product' key={index}>
                            <div className='thumbnail'>
                                <img src={product.thumbnail} alt={product.title}/>
                                <p className='category'>{product.category}</p>
                            </div>
                            <div className='content'>
                                <h2 className='title'>{product.title}</h2>
                                <div className='price-main'>
                                    <p className='price'>&#x20b9;{product.price}</p>
                                    <p className='rating'>{product.rating} &#9733;</p>
                                </div>
                                <button className='cart-btn' onClick={() => handleClick(product.id)}>View Product</button>
                            </div>
                        </div>
                    ))}
                </div>
                </>
            )}
            {productParams.pagination && (
                <div className='pagination'>
                    <ul>
                        {/* <li>Prev</li> */}
                        <>
                            {
                                Array(numButtonsToShow.current).fill(0).map((_, index) => <li key={index} className={index === 0 ? 'active' : ''} onClick={(e) => handlePaginationClick(e)}>{index+1}</li>)
                            }
                        </>
                        {/* <li>Next</li> */}
                    </ul>
                </div>
            )}
        </>
    )
}

export default ProductList