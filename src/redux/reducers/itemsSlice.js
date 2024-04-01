import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    getItemsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getItemsSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    getItemsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    addItemStart(state) {
        state.loading = true;
        state.error = null; // For simplicity, adding item directly
      },
      addItemSuccess(state, action) {
        // Assuming the backend returns the added item
        state.items.push(action.payload);
        state.loading = false;
      },
      addItemFailure(state, action) {
        state.error = action.payload;
        state.loading = false;
      },
      updateItemStart(state) {
        state.loading = true;
        state.error = null;
      },
      updateItemFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      },
  
      updateItemSuccess(state, action) {
        const { id, name, description } = action.payload;
        const index = state.items.findIndex(item => item.id === id);
        if (index !== -1) {
          state.items[index].name = name;
          state.items[index].description = description;
        }
      },
      deleteItemStart(state) {
        state.loading = true;
        state.error = null;
      },
      deleteItemSuccess(state, action) {
        const itemId = action.payload;
        state.items = state.items.filter(item => item.id !== itemId);
        state.loading = false;
      },
      deleteItemFailure(state, action) {
        state.loading = false;
        state.error = action.payload;
      }
     
    // Add other reducers as needed
  }
});

export const { getItemsStart, getItemsSuccess, getItemsFailure,addItemStart,addItemSuccess,addItemFailure,updateItemStart,updateItemFailure,updateItemSuccess,deleteItemStart,deleteItemSuccess,deleteItemFailure } = itemsSlice.actions;

export default itemsSlice.reducer;
