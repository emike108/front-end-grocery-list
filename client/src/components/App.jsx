import React from 'react';
import ReacDOM from 'react-dom';
import GroceryList from './GroceryList.jsx';
import groceriesData from '../data/groceriesData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceriesData: groceriesData,
      item: '',
      quantity: ''
    }

    this.deleteClick = this.deleteClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.addGrocery = this.addGrocery.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
      // item: console.log(event)
    })
  }

  addGrocery(event) {
    event.preventDefault();
    // console.log('you clicked submit', event);
    if (!this.state.item || !this.state.quantity) {
      alert('Whoops, you forgot to enter something!')
    } else {
      this.setState({
        groceriesData: [...this.state.groceriesData, {name: this.state.item, quantity: this.state.quantity}],
        item: '',
        quantity: ''
      })
    }
  }

  deleteClick(name) {
    this.setState({groceriesData: this.state.groceriesData.filter(item => item.name !== name)});
  }


  render() {
    return (
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form>
          <label> Item
            <input name="item" value={this.state.item} onChange={this.handleInput} />
          </label>
          <label> Quantity
            <input name="quantity" value={this.state.quantity} onChange={this.handleInput}/>
          </label>
          <button onClick={this.addGrocery}>Add Grocery</button>
        </form>
          <GroceryList groceries={this.state.groceriesData} deleteClick={this.deleteClick} />
      </div>
    )
  }
};

export default App;

// const App = () => (
//   <div>
//     <img src="grocery-bags.png" />
//     <h1>Grocery List</h1>
//     <form>
//       <label> Item
//         <input name="item" value="" />
//       </label>
//       <label> Quantity
//         <input name="quantity" value="" />
//       </label>
//       <button>Add Grocery</button>
//       <GroceryList groceries={groceriesData} />
//     </form>
//   </div>
// );