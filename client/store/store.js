import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../userSlice/userSlice';

//use a reducer to keep a logic one easy acessible place
//Store is superset of our state. It contains state and also contains reducer functions
//that will update our state.
export const store = configureStore({
  reducer: {
    user : userReducer,
  },
});

export default store;