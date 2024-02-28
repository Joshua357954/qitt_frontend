import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from "../features/authSlice.js"
import userSlice from '../features/userSlice.js';

const store = configureStore({
  reducer: {
    user:AuthSlice ,
    users:userSlice
  },
});

export default store;