import {createSlice} from '@reduxjs/toolkit';

const breadcrumb = createSlice({
    name: 'breadcrumb',
    initialState: [],
    reducers: {
        breadcrumbList: (state, action) =>{
            return {...action.payload }
        }
    }
})

const {reducer, actions} = breadcrumb;
export const {breadcrumbList} = actions;
export default reducer;