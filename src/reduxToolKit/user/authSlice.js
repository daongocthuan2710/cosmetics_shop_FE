import {createSlice} from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auths',
    initialState: [],
    reducers: {
        loginAction: (state, action) =>{
            return {...action.payload }
        }
    }
})

const {reducer, actions} = auth;
export const {loginAction} = actions;
export default reducer;