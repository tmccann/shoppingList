import './App.css'
import { useState } from "react";
import AddItem from './assets/Components/AddItem/AddItem';
import Header from './assets/Components/Header/Header';
import ShoppingList from './assets/Components/ShoppingList/ShoppingList';


const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "mushrooms with creamy garlic sauce monkey elephant cheese"
    },

    {
      id: 2,
      checked: false,
      item: "beans"
    },

    {
      id: 3,
      checked: false,
      item: "rice"
    },

    {
      id: 4,
      checked: false,
      item: "pasta"
    },


  ])

  const handleCheck = (id) => {
    // use map to go through items and find matching id
    const listItems = items.map((items) => items.id === id ? {
      // when true load all items changing selected id's  check value to opposite value: ie true to false
      ...items, checked: !items.checked
    } : items);
    // save new item state to state
    setItems(listItems);
    // save to local storage
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const deleteItem = (id) => {
    console.log(id)
    // create new array with all items that do not equal id
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems));

  }
  return (
    <div className="wrap">
      <Header />
      <AddItem />
      <ShoppingList
          items={items}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;
