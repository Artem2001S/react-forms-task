import { configureStore } from '@reduxjs/toolkit';
import userFormReducer from 'redux/reducers/userFormSlice';

export const store = configureStore({ reducer: { userForm: userFormReducer } });
