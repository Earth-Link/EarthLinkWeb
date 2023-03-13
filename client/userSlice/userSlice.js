import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    score: 0,
    reload: false,
    time: Date.now(),
    waitError: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
      updateScore : (state, action) => {
          // console.log("Received Dispatch!");
          state.score = action.payload;
      },
      reloadUser : (state) => {
        // console.log("Received Dispatch!");
        state.reload = !state.reload;
      },
      resetTime : (state) => {
        console.log("updating time");
        const newTime = new Date();
        state.time = newTime.getTime();
      },
      setWaitErrorTrue : (state) => {
        state.waitError = true;
      },
      setWaitErrorFalse : (state) => {
        state.waitError = false;
      },
    }
});

export const {
  updateScore, 
  reloadUser, 
  resetTime, 
  setWaitErrorTrue, 
  setWaitErrorFalse
} = userSlice.actions;

export default userSlice.reducer;