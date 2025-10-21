import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productsData } from './productsData'; // We'll create this mock data file

// Simulate an API call
const fetchProductsAPI = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(productsData), 1000) // 1-second delay
  );
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetchProductsAPI();
    return response;
  }
);

const initialState = {
  items: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;