import {createSlice} from '@reduxjs/toolkit';

const cate = createSlice({
    name: 'cates',
    initialState: [],
    reducers: {
        cateListAction: (state, action) =>{
            return {...action.payload };           
        }
    }
})

const {reducer, actions} = cate;
export const {cateListAction} = actions;
export default reducer;