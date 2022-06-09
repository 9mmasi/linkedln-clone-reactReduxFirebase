import {createSlice} from "@reduxjs/toolkit";

export const userSlice=createSlice({
  name:"user",
  initialState:{value:null},
  reducers:{

      login:(state,actions)=>{
        state.value=actions.payload
      },
      logout:(state)=>{
        state.value=null
      }

  }

})
export default userSlice.reducer;
export const{login,logout}=userSlice.actions
