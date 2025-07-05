import { createSlice } from "@reduxjs/toolkit";




const privateSlice = createSlice({
  name:'private',
  initialState:false,
  reducers:{

    toggle : (state) =>{
      console.log(state);
     return state =!state;
    }
  }
})



export const privateActions = privateSlice.actions ;


export default privateSlice;