import {createSlice} from '@reduxjs/toolkit';

const cart = createSlice({
    name: 'cates',
    initialState: {
        cartTotal: 0
    },
    reducers: {
        cartTotalAction: (state, action) =>{
            return {...action.payload };           
        }
    }
})

const {reducer, actions} = cart;
export const {cartTotalAction} = actions;
export default reducer;