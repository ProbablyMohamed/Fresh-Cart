import { configureStore } from "@reduxjs/toolkit";
import { brandsReducer } from "./brandsSlice.js";
import { categoriesReducer } from "./categoriesSlice.js";
import { ordersReducer } from "./ordersSlice.js";




export let store= configureStore({
    reducer:{
      brand:brandsReducer,
      categories:categoriesReducer,
      orders: ordersReducer,
    
    }
})