import React, { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import ProductListSkelton from './ProductListSkelton';
import { productsApi } from './ProductListSlice';
 
const ProductList = (productParams) => {

    let category = productParams.category;
    let limit = productParams.limit;
    let skip = productParams.skip;
    let pagination = productParams.pagination;
    const [newSkip, setNewSkip] = useState(skip);

    // Product Data
    const [trigger, { data, isLoading, isError, isSuccess }] = productsApi.endpoints.getAllProducts.useLazyQuery();

    // Navigate to PDP
    const navigate = useNavigate();
    const handleClick = (prdId) => {
        navigate(`/ProductDetails/${prdId}`);
    }

    // Calculate number of buttons to show 
    const totalProducts = data?.total;
    let numButtonsToShow = useRef(0);
    if(totalProducts !== undefined) {
        const itemsPerPage = limit;
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
      
        // Calculate the new skip value based on the clicked button index
        const currentPage = parseInt(e.target.innerText, 10); 
        const itemsPerPage = limit;
        setNewSkip((currentPage - 1) * itemsPerPage);
    }

    useEffect(() => {
        trigger({category,limit,skip: newSkip,pagination});
    },[newSkip, category, limit, pagination, trigger])

    return (
        <>
            { isLoading && 
                <>
                <div className={`products-grid products-grid-${productParams.grid}`}>
                    <ProductListSkelton cards={productParams.cards}/>
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
                        {
                            Array(numButtonsToShow.current).fill(0).map((_, index) => <li key={index} className={index === 0 ? 'active' : ''} onClick={(e) => handlePaginationClick(e)}>{index+1}</li>)
                        }
                    </ul>
                </div>
            )}
        </>
    )
}

export default ProductList