import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
        state.products = { loading: true };
      })
      .addCase(extraActions.getAll.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(extraActions.getAll.rejected, (state, action) => {
        state.products = { error: action.error };
      });
  }
});

// exports
export const ProductListActions = { ...slice.actions, ...extraActions };
export const ProductListReducer = slice.reducer;

// implementation
function createInitialState() {
  return {
    products: []
  };
}

function createExtraActions() {
  const baseUrl = "https://fakestoreapi.com/products?limit=4";

  return {
    getAll: createAsyncThunk(
      `${name}/getAll`,
      async () => await axios.get(baseUrl)
    )
  };
}
