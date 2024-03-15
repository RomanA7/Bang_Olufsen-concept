
import { configureStore } from '@reduxjs/toolkit';
import  cartReducer  from './cartSlice';
import storage from 'redux-persist/lib/storage';
import {combineReducers} from "redux";
import { persistReducer } from 'redux-persist';

//just in case - we might need more reducers later on
const reducers = combineReducers({
  cart: cartReducer,
});


const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;