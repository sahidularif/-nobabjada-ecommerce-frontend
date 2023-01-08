import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Icolor {
  color1?: string | null;
  color2?: string | null;
  color3?: string | null;
};
export type Product = {
  _id: string;
  title: string;
  price: number;
  description: string;
  color: Icolor;
  img_url: string;
};
export type TProduct = {
  _id: string;
  title: string;
  price: number;
  description: string;
  img_url: string;
};

interface ProductState {
  loading: boolean;
  data: Product[] | [];
  error: string | null;
}

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  
  try {
    const response = await axios.get('https://gleaming-puce-pullover.cyclic.app//product/getAllProduct');
    return response.data;
  } catch (error) {
    console.log('Error: ', error);
  }
});
const initialState: ProductState = {
  loading: false,
  data: [],
  error: null,
};
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.data = action.payload || [];
        state.loading = false;
        state.error = null
      }
      )
      .addCase(fetchProducts.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.data = []
        state.loading = false
      });
  },
});
// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// export const { ordered, restoked } = productSlice.actions;
