import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducers/itemsSlice'; // Assume you have an items reducer

const store = configureStore({
  reducer: {
    items: itemsReducer, // Assuming you have an items reducer
  },
  // middleware field is omitted because Redux Thunk is included by default
});

export default store;
