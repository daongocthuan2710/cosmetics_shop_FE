import {createSlice} from '@reduxjs/toolkit';

const home = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct: (state, action) =>{
            const  newProduct = action.payload;
            state.push(newProduct);
        }
    }
})

const {reducer, actions} = home;
export const {addProduct} = actions;
export default reducer;