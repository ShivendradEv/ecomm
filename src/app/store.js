import { configureStore } from '@reduxjs/toolkit'
import { ProductListReducer } from '../features/ProductList/ProductListSlice'

export const store = configureStore({
  reducer: {
    productList: ProductListReducer,
  },
})