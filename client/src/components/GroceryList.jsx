import React from 'react';
import ReacDOM from 'react-dom';
import GroceryListItem from './GroceryListItem.jsx';



const GroceryList = (props) => (
  <ul className="groceries">
    {props.groceries.map((item, index) =>
      <GroceryListItem item={item} key={index} deleteClick={props.deleteClick} />
      )}
  </ul>
);

export default GroceryList;