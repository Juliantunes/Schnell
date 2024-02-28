import React, { useState } from 'react';

function GroceryList() {
  const [list, setList] = useState('');

  const handleChange = (event) => {
    setList(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted List: ' + list);
    // Here you would handle the submission, e.g., sending it to the backend
  };

  return (
    <div>
      <h2>My Grocery List</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={list}
          onChange={handleChange}
          placeholder="Enter your grocery items here..."
        />
        <button type="submit">Submit List</button>
      </form>
    </div>
  );
}

export default GroceryList;
