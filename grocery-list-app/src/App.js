import React from 'react';
import GroceryList from './GroceryList'; // Make sure the path matches where your GroceryList component is saved

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GroceryList />
      </header>
    </div>
  );
}

export default App;
