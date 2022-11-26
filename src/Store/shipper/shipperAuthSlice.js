import {createSlice} from '@reduxjs/toolkit';

const shipperAuth = createSlice({
    name: 'shipperAuth',
    initialState: [],
    reducers: {
        loginShipperAction: (state, action) =>{
            return {...action.payload }
        }
    }
})

const {reducer, actions} = shipperAuth;
export const {loginShipperAction} = actions;
export default reducer;