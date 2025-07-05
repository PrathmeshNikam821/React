import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privateSlice from "./privacy";



const  coutnerStore = configureStore({reducer : {
  counter:counterSlice.reducer,
  private:privateSlice.reducer
}});


export default coutnerStore;

