import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/actions/itemsActions';
import { Link } from 'react-router-dom'; // Import Link from React Router

function AddItems() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = { name, description };
    dispatch(addItem(itemData));
    // Optionally reset form fields here
    setName('');
    setDescription('');
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen bg-gray-100'>
        <div className='p-6 max-w-2xl w-full'>
          <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-lg p-8 flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-gray-800'>Add Item</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className='border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <button type="submit" className='bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600'>Add Item</button>
            <Link to="/" className='text-blue-500 mt-2'>Back to Home</Link> {/* Link to navigate back to the home page */}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddItems;
