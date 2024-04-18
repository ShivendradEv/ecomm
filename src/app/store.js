import { configureStore } from '@reduxjs/toolkit'
import { ProductListReducer } from '../features/productList/ProductListSlice';
import { ProductDetailsReducer } from '../features/productDetails/ProductDetailsSlice';

export const store = configureStore({
  reducer: {
    productList: ProductListReducer,
    productDetails: ProductDetailsReducer,
  },
})