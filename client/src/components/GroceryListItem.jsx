import React from 'react';
import ReacDOM from 'react-dom';


const GroceryListItem = (props) => (
  <li>
    <span>{props.item.name}</span>
    <span> - {props.item.quantity}</span>
    <button onClick={() => props.deleteClick(props.item.name)} >Delete</button>
  </li>
);

export default GroceryListItem;