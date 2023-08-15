/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchProdutcs = createAsyncThunk("products/fetchProducts", async ()=>{
    const res = await axios.get("https://fakestoreapi.com/products")
    return res.data;
})

export const productsSlice = createSlice({
    name: "products",
    initialState:{
        isLoading: false,
        products: [],
        error: null
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProdutcs.pending, (state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchProdutcs.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products = action.payload;
            state.error = null;
        })
        builder.addCase(fetchProdutcs.rejected, (state, action)=>{
            state.isLoading = false;
            state.products = [];
            state.error = action.error.message;
        })
    }
})

export default productsSlice.reducer;