import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdateItemModal from '../utils/Modal/updateItemsModal';
import { Route, useNavigate} from 'react-router-dom';
import {fetchItems,updateItem,deleteItem} from "../../../src/redux/actions/itemsActions" 
import { useDispatch, useSelector } from 'react-redux';
function GetAllItems() {
    const navigate=useNavigate();
    const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null); // Track the current item for editing
  console.log(currentItem,"currentItem")
  const items = useSelector((state) => state.items.items); 


  const handleUpdateItem = async (itemId, name, description) => {
    await dispatch(updateItem(itemId, { name, description }));
    dispatch(fetchItems()); // Refetch items to get the updated list
  };
  
  console.log(items)
  useEffect(() => {
    dispatch(fetchItems());

}, [dispatch]);

const handleAddItem=() => {
    navigate('/add')
}

  const deleteItems = async (id) => {
   dispatch(deleteItem(id));
  };

  return (
    <>
      <div className='container mx-auto p-4'>
        <h2 className='text-xl font-semibold mb-4'>Items List</h2>
        <button
        onClick={handleAddItem}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add Item
      </button>
        <div>
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className='border p-2 my-2 shadow flex justify-between items-center '>
                <div>
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Description:</strong> {item.description}</p>
                </div>
                <div className='px-4'>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                  onClick={() => {
                    setCurrentItem(item);
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteItems(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
                </div>
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </div>
      {isModalOpen && (
        <UpdateItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={currentItem}
          onUpdate={handleUpdateItem }
        />
      )}
    </>
  );
}

export default GetAllItems;
