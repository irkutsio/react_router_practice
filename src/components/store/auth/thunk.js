import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from 'services/auth_services';

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const { data } = await login(body);
  return data;
});
