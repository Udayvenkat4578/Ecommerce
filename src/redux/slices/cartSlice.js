import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState :[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload);
        },
        
            removeItem: (state, action) => {
                const itemIndexToRemove = action.payload;
                return state.filter((_, index) => index !== itemIndexToRemove);
              
              
        },
        
            clearCart :(state)=>{
                state.cartItems=[]
            }
        

    }
})

export const {addItem} = cartSlice.actions;
export const {removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;