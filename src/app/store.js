import { configureStore } from '@reduxjs/toolkit';
import { ProductDetailsReducer } from '../features/productDetails/ProductDetailsSlice';
import { productsApi } from '../features/productList/ProductListSlice';

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    productDetails: ProductDetailsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})