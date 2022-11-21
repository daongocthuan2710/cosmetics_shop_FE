import {createSlice} from '@reduxjs/toolkit';

const cartTotalPrice = createSlice({
    name: 'cartTotalPrice',
    initialState: {},
    reducers: {
        cartTotalPriceAction: (state, action) =>{
            return {...action.payload };           
        }
    }
})

const {reducer, actions} = cartTotalPrice;
export const {cartTotalPriceAction} = actions;
export default reducer;