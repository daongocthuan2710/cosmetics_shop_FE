import {createSlice} from '@reduxjs/toolkit';

const login = createSlice({
    name: 'login',
    initialState: [],
    reducers: {
        loginNavigateAction: (state, action) =>{
            return {...action.payload }
        }
    }
})

const {reducer, actions} = login;
export const {loginNavigateAction} = actions;
export default reducer;