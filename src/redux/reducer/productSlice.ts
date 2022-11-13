import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import names from "../../data.json";
interface Isize {
  small?: string;
  medium?: string;
  large?: string;
};
interface Icolor {
  color_1?: string | null;
  color_2?: string | null;
  color_3?: string | null;
};
export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  size: Isize;
  color: Icolor;
  img_url: string;
};
export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  img_url: string;
};

interface ProductState {
  loading: boolean;
  data: Product[] ;
  error: string | null;
}

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("../../data");
  const data = await res.json();
  return data;
});
const initialState: ProductState = {
  loading: false,
  data: names,
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
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProducts.rejected, (state, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});
// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// export const { ordered, restoked } = productSlice.actions;
