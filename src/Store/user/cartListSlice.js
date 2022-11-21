import {createSlice} from '@reduxjs/toolkit';

const cartList = createSlice({
    name: 'cartList',
    initialState: {
        cartTotal: 0
    },
    reducers: {
        cartListAction: (state, action) =>{
            return {...action.payload };           
        }
    }
})

const {reducer, actions} = cartList;
export const {cartListAction} = actions;
export default reducer;