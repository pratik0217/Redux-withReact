import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products',async ()=> {
    const response = await fetch("https://dummyjson.com/products");
    response = await response.json();
    return response.products;
});

const initialState = {
    items:[],
    status:undefined,
    err:null
}

const productsSlice = createSlice({
    name:'productsSlice',
    initialState,
    extraReducers:(builder)=> {
        builder.addCase(fetchProducts.fulfilled, (state,action)=> {
            state.status = 'succeeded',
            state.items = action.payload;
        })
    }
})

export default productsSlice.reducer