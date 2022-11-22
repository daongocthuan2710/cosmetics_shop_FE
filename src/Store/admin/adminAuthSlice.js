import {createSlice} from '@reduxjs/toolkit';

const adminAuth = createSlice({
    name: 'adminAuth',
    initialState: [],
    reducers: {
        loginAdminAction: (state, action) =>{
            return {...action.payload }
        }
    }
})

const {reducer, actions} = adminAuth;
export const {loginAdminAction} = actions;
export default reducer;