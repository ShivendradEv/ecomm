import { configureStore } from '@reduxjs/toolkit'
import { ProductListReducer } from '../features/productList/ProductListSlice'

export const store = configureStore({
  reducer: {
    productList: ProductListReducer,
  },
})