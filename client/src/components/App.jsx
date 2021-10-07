import React from 'react';
import ReacDOM from 'react-dom';
import GroceryList from './GroceryList.jsx';
import groceriesData from '../data/groceriesData.js';

const App = () => (
  <div>
    <img src="grocery-bags.png" />
    <h1>Grocery List</h1>
    <form>
      <label> Item
        <input name="item" value="" />
      </label>
      <label> Quantity
        <input name="quantity" value="" />
      </label>
      <button>Add Grocery</button>
      <GroceryList groceries={groceriesData} />
    </form>
  </div>
);

export default App;