import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../util/axios';

// Slice
const name = 'productDetails';
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
        state.productDetails = action.payload;
        state.loading = false;
      })
      .addCase(extraActions.getAll.rejected, (state, action) => {
        state.error = action.error;
      });
  }
});

// exports
export const ProductDetailsActions = { ...slice.actions, ...extraActions };
export const ProductDetailsReducer = slice.reducer;

// implementation
function createInitialState() {
  return {
    productDetails: [],
    loading: false,
    error: '',
  };
}

function createExtraActions() {
  
  return {
    getAll: createAsyncThunk(
      `${name}/getAll`,
      async (productId) => {
        if(productId.id !== '') {
            let baseUrl = `/products/${productId.id}`;
            const response = await axios.get(baseUrl)
            return response.data;
        }
      }
    )
  };
}
