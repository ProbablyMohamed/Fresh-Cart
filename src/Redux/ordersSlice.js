import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

let initialState={orders:[],isLoading:false,error:null}

export let getOrders = createAsyncThunk('ordersSlice/getOrders',async ()=> {
    const decoded = jwtDecode(localStorage.getItem("userToken"));
    console.log(decoded);
 let{data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`)
.catch((err)=>err)

return data
})


let ordersSlice= createSlice({
    name:'ordersSlice',
    initialState,
    extraReducers:(builder)=>{
builder.addCase(getOrders.pending,(state,action)=>{
state.isLoading=true
});
builder.addCase(getOrders.fulfilled,(state,action)=>{

    state.orders = action.payload
    state.isLoading=false
})
    }
})
export let ordersReducer= ordersSlice.reducer