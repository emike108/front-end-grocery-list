import React from 'react';
import ReacDOM from 'react-dom';
import GroceryListItem from './GroceryListItem.jsx';



const GroceryList = (props) => (
  <ul className="groceries">
    {props.groceries.map((item, index) =>
      <GroceryListItem item={item} key={index}/>
      )}
  </ul>
);

export default GroceryList;