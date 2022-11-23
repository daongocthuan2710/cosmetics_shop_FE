import {createSlice} from '@reduxjs/toolkit';

const search = createSlice({
    name: 'search',
    initialState: [],
    reducers: {
        searchAction: (state, action) =>{
            return {...action.payload };           
        }
    }
})

const {reducer, actions} = search;
export const {searchAction} = actions;
export default reducer;