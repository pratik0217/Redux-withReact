import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './slice'
import productsReducer from './ProductSlice'

const store = configureStore ({
    reducer: {
        cart:storeReducer,
        products:productsReducer
    }
})

export default store;