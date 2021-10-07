import React from 'react';
import ReacDOM from 'react-dom';


const GroceryListItem = (prop) => (
  <li>
    <span>{prop.item.name}</span>
    <span>{prop.item.quantity}</span>
  </li>
);

export default GroceryListItem;