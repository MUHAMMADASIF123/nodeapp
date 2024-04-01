import { useState } from "react";
import { useDispatch } from 'react-redux';
import { updateItem } from '../../../redux/actions/itemsActions';
function UpdateItemModal({ isOpen, onClose, item, onUpdate }) {
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const dispatch = useDispatch();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await onUpdate(item.id, name, description);
      onClose(); // Close modal after update
    };
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <h3 className="text-lg text-center mb-4">Update Item</h3>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full mb-2 p-2 border rounded"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              className="w-full mb-2 p-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 border rounded bg-blue-500 text-white">Update</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
export default UpdateItemModal; 