import { getItemsStart, getItemsSuccess, getItemsFailure,addItemFailure,addItemSuccess,addItemStart,updateItemStart,updateItemSuccess,updateItemFailure,deleteItemStart,deleteItemSuccess,deleteItemFailure } from '../reducers/itemsSlice';
import axios from 'axios'; // Assuming you use axios for HTTP requests
import {apiInstance} from '../../components/services/apiInstance/apiInstance'; //
export const fetchItems = () => async (dispatch) => {
  dispatch(getItemsStart());
  try {
    const response = await apiInstance.get(); // Assuming you have an API endpoint for fetching items
    dispatch(getItemsSuccess(response.data));
  } catch (error) {
    dispatch(getItemsFailure(error.message));
  }
};

export const addItem = (itemData) => async (dispatch) => {
    dispatch(getItemsStart()); // You can reuse getItemsStart for loading indication or create a separate one for addItem
    try {
      const response = await apiInstance.post('/add', itemData); // Adjust the URL as needed
      dispatch(addItemSuccess(response.data)); // Assuming the API returns the added item
    } catch (error) {
      dispatch(addItemFailure(error.message));
    }
  };
  export const updateItem = (itemId, updatedItemData) => async (dispatch) => {
    dispatch(updateItemStart());
    try {
        console.log(updatedItemData,"updatedItemData");
      const response = await apiInstance.put(`/update/${itemId}`, updatedItemData); // Assuming the API endpoint for updating an item
      dispatch(updateItemSuccess(response.data)); // Assuming the API returns the updated item
    } catch (error) {
      dispatch(updateItemFailure(error.message));
    }
  };
  export const deleteItem = (itemId) => async (dispatch) => {
    dispatch(deleteItemStart());
    try {
      await apiInstance.delete(`/delete/${itemId}`);
      dispatch(deleteItemSuccess(itemId)); // Assuming itemId is returned after deletion
    } catch (error) {
      dispatch(deleteItemFailure(error.message));
    }
  };