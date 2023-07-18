import { loginThunk } from './thunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  access_token: '',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.access_token = payload.access_token;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginThunk.pending, handlePending);
    builder.addCase(loginThunk.fulfilled, handleFulfilled);
    builder.addCase(loginThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
