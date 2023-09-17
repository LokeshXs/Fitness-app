
import { createSlice } from "@reduxjs/toolkit";

const exerciseSearch = createSlice({
  name:'Exercise Search',
  initialState:{
    value:'all',
  },

  reducers:{
    updateSearchedExercise:(state,action)=>{
      state.value = action.payload;
    }
  }
});

export const {updateSearchedExercise} = exerciseSearch.actions;
export default exerciseSearch.reducer;