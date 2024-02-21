import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from "../features/authSlice.js"
// import yourReducer from './yourSlice'; Import your reducer

const store = configureStore({
  reducer: {
    user:AuthSlice 
  },
});

export default store;