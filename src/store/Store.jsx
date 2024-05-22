import { configureStore } from "@reduxjs/toolkit";
// import appSlice from "../slice/appSlice";
import appReducer from "../slice/appSlice";
import ChatSlice from "../chatSlice/ChatSlice";

const store = configureStore({
    reducer: {
        app: appReducer,
        chat: ChatSlice
    }
    });
  
  export default store;