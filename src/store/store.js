import { configureStore } from "@reduxjs/toolkit";
// import bodyPartListReducer from "../store/bodyPartSlice";
import exerciseSearchReducer from "./searchExerciseSlice";

const store = configureStore({
  reducer: {
    exerciseSearchReducer: exerciseSearchReducer,
  },
});

export default store;
