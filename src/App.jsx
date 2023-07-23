import './App.css'
import Header from './Components/Header/Header'
import Lists from './Components/List/Lists'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'
import Additem from './Components/Additem/AddItem'


const App = () => {

  const [listItems, setListItem] = useState([
    {
      id: 1,
      item: "peas",
      checked: false
    },
    {
      id: 2,
      item: "beans",
      checked: false
    },
    {
      id: 3,
      item: "milk",
      checked: false
    },
    {
      id: 4,
      item: "soup",
      checked: false
    }
  ])
  const [newItems, setNewItems] = useState('')

  const addItems = (item) => {
    const id = listItems.length ? listItems[listItems.length - 1].id + 1 : 1;
    const addItem = { id, checked: false, item };
    console.log(addItem);
    const updatedListItems = [...listItems, addItem];
    setListItem(updatedListItems);
    setNewItems('');
  };

  const handleCheck = (id) => {
    // use map to go through items and find matching id
    const items = listItems.map((items) => items.id === id ? {
      // when true load all items changing selected id's  check value to opposite value: ie true to false
      ...items, checked: !items.checked
    } : items);
    // save new item state to state
    setListItem(items);
    // save to local storage
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
  }

  const deleteItem = (id) => {
    // use filter to make you list with onle required items
    const filteredlist = listItems.filter((items) => items.id !== id)
    setListItem(filteredlist)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItems) return;
    addItems(newItems)
  }
  return (
    <div className='App'>
      <Header title="Shopping List" />
      < Additem
        handleSubmit={handleSubmit}
        setNewItems={setNewItems}
        newItems={newItems} />
      <Lists
        listItems={listItems}
        handleCheck={handleCheck}
        deleteItem={deleteItem} />
      <Footer
        listItems={listItems} />
    </div>
  )
}

export default App