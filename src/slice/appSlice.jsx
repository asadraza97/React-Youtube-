import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
    open: true,
    video:[],
    catogery: "All",
    searchSuggestion: [],
    },
    reducers:{
        // action
        toggleSidebar:(state)=>{
            state.open = !state.open;
        },
        setHomeVideo:(state,action)=>{
            state.video = action.payload
        },
        setCatogery:(state,action)=>{
            state.catogery = action.payload
        },
        setSearchSuggestion:(state,action)=>{
            state.searchSuggestion = action.payload
        }
    }

});
export const {toggleSidebar,setHomeVideo,setCatogery,setSearchSuggestion} = appSlice.actions;
export default appSlice.reducer 