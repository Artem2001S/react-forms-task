import { configureStore } from '@reduxjs/toolkit';
import userFormReducer from 'redux/reducers/userFormSlice';
import { saveStateLocalStorage } from './localStorage';

export const store = configureStore({ reducer: { userForm: userFormReducer } });

store.subscribe(() => saveStateLocalStorage(store.getState()));
