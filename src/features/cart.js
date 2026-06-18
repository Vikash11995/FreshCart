import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    cartTabStatus : true,
}

const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
toggleCartTab(state){
state.cartTabStatus = !state.cartTabStatus
state.quantity = state.quantity + 1
}
    }
})
export const {toggleCartTab} = CartSlice.actions
export default CartSlice.reducer