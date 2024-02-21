import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../utils/utils.js';
import axios from 'axios';

const apiUrl = `${baseUrl}/api/auth`;

// Create async thunk for user registration
export const registerUser = createAsyncThunk('user/registerUser', async (userData) => {
  const response = await axios.post(`${apiUrl}/register`, userData);
  return response.data;
});

export const loginUser = createAsyncThunk('user/loginUser', async (credentials) => {
  const response = await axios.post(`${apiUrl}/login`, credentials);
  console.log(response)
  return response.data;
});

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    joined: '',
    gender: '',
    dateOfBirth: '',
    faculty: '',
    department: '',
    session: '',
    imageUrl:'',
    courseName: '',
    status: 'idle', // Possible values: 'idle', 'loading', 'succeeded', 'failed'
    error: null,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update state with registered user data
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.joined = action.payload.createdAt;
        state.gender = action.payload.gender;
        state.dateOfBirth = action.payload.dateOfBirth;
        state.faculty = action.payload.faculty;
        state.department = action.payload.department;
        state.session = action.payload.session;
        state.imageUrl = action.payload.imageUrl;
        state.message = action.payload.message;
        state.courseName = action.payload.courseName
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Assuming action.payload has the expected fields
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.joined = action.payload.createdAt;
        state.gender = action.payload.gender;
        state.dateOfBirth = action.payload.dateOfBirth;
        state.faculty = action.payload.faculty;
        state.department = action.payload.department;
        state.session = action.payload.session;
        state.imageUrl = action.payload.imageUrl;
        state.message = action.payload.message;
        state.courseName = action.payload.courseName
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the reducer
export default userSlice.reducer;
