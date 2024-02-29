import React, { useState } from 'react';

function GroceryList() {
  const [items, setItems] = useState([]); // Store the list of items as an array
  const [currentItem, setCurrentItem] = useState(''); // The current item being input

  const handleChange = (event) => {
    setCurrentItem(event.target.value); // Update the current input item
  };

  const handleAddItem = () => {
    if (!currentItem.trim() || items.length >= 35) return; // Don't add if input is empty or list is full
    setItems([...items, currentItem.trim()]); // Add the current item to the list
    setCurrentItem(''); // Clear the current item input for the next entry
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((item,i) => i !== index))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted List: ' + items.join(', ')); // Join the array items into a string
    // Here you would handle the submission, e.g., sending it to the backend
  };

  return (
    <div>
      <h2>My Grocery List</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={currentItem}
          onChange={handleChange}
          placeholder="Enter a grocery item"
        />
        <button type="button" onClick={handleAddItem} disabled={items.length >= 35}>
          Add New Item
        </button>
        <button type="submit">Submit List</button>

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // Display each item in the list
          ))}
        </ul>
      </form>
    </div>
  );
}

export default GroceryList;
