import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        message: [],
    },
    reducers: {
        setMessage:(state, action)=>{
            state.message.splice(100,1)
            state.message.push(action.payload)
        }
    }
})
export const {setMessage} =ChatSlice.actions;
export default ChatSlice.reducer;