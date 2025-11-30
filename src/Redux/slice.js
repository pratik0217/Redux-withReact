import { createSlice } from "@reduxjs/toolkit";

const initialState  ={
    value : 0
};

const addToCart = createSlice({
    name:"Cart",
    initialState,
    reducers: {
        addItem: (state) => {
            state.value+=1;
        },
        removeAddItem: (state) => {
            state.value-=1;
        },
        clearItem: (state) => {
            state.value =0;
        }
    }
})

export const {addItem, removeAddItem, clearItem} = addToCart.actions; // data revices and send to store in addTocart reducer through
export default addToCart.reducer; // updating store value