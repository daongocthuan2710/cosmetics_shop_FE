import {createSlice} from '@reduxjs/toolkit';

const typeProduct = createSlice({
    name: 'typeProduct',
    initialState: '',
    reducers: {
        typeProductAction: (state, action) =>{
            return action.payload;           
        }
    }
})

const {reducer, actions} = typeProduct;
export const {typeProductAction} = actions;
export default reducer;