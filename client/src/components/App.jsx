import React from 'react';
import ReacDOM from 'react-dom';
import GroceryList from './GroceryList.jsx';
import groceriesData from '../data/groceriesData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceriesData: groceriesData
    }

    this.deleteClick = this.deleteClick.bind(this);
  }

  deleteClick(name) {
    // event.preventDefault();
    //look at what item the click even occured
    //delete that item from the data
    this.setState({groceriesData: this.state.groceriesData.filter(item => item.name !== name)});
    // console.log('delete click', event, name);
  }


  render() {
    return (
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