import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductListActions } from './ProductListSlice';
 
const ProductList = () => {

    const products = useSelector((state) => state.productList.products.data);
    const dispatch = useDispatch();
    console.log(products);

    useEffect(() => {
        dispatch(ProductListActions.getAll());
    },[dispatch])

    return (
    <div>ProductList</div>
    )
}

export default ProductList