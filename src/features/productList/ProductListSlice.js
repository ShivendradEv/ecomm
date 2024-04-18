import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../util/axios';

// Slice
const name = 'productList';
const initialState = createInitialState();
const extraActions = createExtraActions();
const slice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Define extra reducers here using builder
      .addCase(extraActions.getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(extraActions.getAll.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(extraActions.getAll.rejected, (state, action) => {
        state.error = action.error;
      });
  }
});

// exports
export const ProductListActions = { ...slice.actions, ...extraActions };
export const ProductListReducer = slice.reducer;

// implementation
function createInitialState() {
  return {
    products: [],
    loading: false,
    error: '',
  };
}

function createExtraActions() {
  
  return {
    getAll: createAsyncThunk(
      `${name}/getAll`,
      async (productParams) => {
        let baseUrl;
        let currentCategory = window.location.href.split("/ProductList/");
        if(window.location.href.includes("/ProductList/")) {
          if(productParams.category !== '' && productParams.limit !== '' && currentCategory[1].toLocaleLowerCase().replace("%20", " ") === productParams.category) {
            baseUrl = `/products/category/${productParams.category}?limit=${productParams.limit}`;
            const response = await axios.get(baseUrl);
            return response.data;
          }
        }
        else {
          if(productParams.category !== '' && productParams.limit !== '') {
            baseUrl = `/products/category/${productParams.category}?limit=${productParams.limit}`;
            const response = await axios.get(baseUrl);
            return response.data;
          }
          else if(productParams.category !== '') {
            baseUrl = `/products?limit=${productParams.limit}`;
            const response = await axios.get(baseUrl);
            return response.data;
          }
        }
      }
    )
  };
}
