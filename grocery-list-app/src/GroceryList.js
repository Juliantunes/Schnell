import React, { useState } from 'react';
import './GroceryList.css'

function GroceryList() {
  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  const handleChange = (event) => {
    setCurrentItem(event.target.value);
  };

  const handleAddItem = () => {
    if (!currentItem.trim() || items.length >= 35) {
      return;
    }
    setItems([...items, currentItem.trim()]);
    setCurrentItem('');
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted List: ' + items.join(', '));
  };

  return (
    <div className="grocery-list">
      <h2>My Grocery List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentItem}
          onChange={handleChange}
          placeholder="Enter a grocery item"
        />
        <button 
          type="button" 
          onClick={handleAddItem} 
          disabled={items.length >= 35}
          className="add-item-button" 
        >
          Add New Item
        </button>
        <button type="submit" className="submit-list-button">Submit List</button> 
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="grocery-item">
            {item}
            <button 
              type="button" 
              onClick={() => handleDeleteItem(index)} 
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );}

  export default GroceryList