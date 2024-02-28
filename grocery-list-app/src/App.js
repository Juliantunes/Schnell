import logo from './logo.svg';
import './App.css';
import GroceryList from './GroceryList'
import React from 'react'

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