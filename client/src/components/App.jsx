import React from 'react';
import ReacDOM from 'react-dom';

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
      <ul className="groceries">
        <li>
          <span>apples - </span>
          <span>4</span>
        </li>
        <li>
          <span>bread - </span>
          <span>2</span>
        </li>
        <li>
          <span>etc...</span>
        </li>
      </ul>
    </form>
  </div>
);

export default App;