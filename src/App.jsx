import './App.css'
import Header from './Components/Header/Header'
import Lists from './Components/List/Lists'
import Footer from './Components/Footer/Footer'
import { useState, useEffect } from 'react'
import Additem from './Components/Additem/AddItem'
import SearchItem from './Components/Search/SearchItem'


const App = () => {
  const API_URL = 'http://localhost:3500/items'
  const [listItems, setListItem] = useState([]);
  const [newItems, setNewItems] = useState('');
  const [search, setSearch] = useState('');
  const [fetchErr, setFetchErr] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const resp = await fetch(API_URL);
        if (!resp.ok) throw Error('Did not recieve expected data')
        const items = await resp.json();
        setListItem(items);
        setFetchErr(null);
      } catch (err) {
        setFetchErr(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(()=>{ fetchItems()},2000)

  }, [])

  const setAndSave = (newItems) => {
    setListItem(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }

  const addItems = (item) => {
    const id = listItems.length ? listItems[listItems.length - 1].id + 1 : 1;
    const addItem = { id, checked: false, item };
    console.log(addItem);
    const updatedListItems = [...listItems, addItem];
    setAndSave(updatedListItems);
    setNewItems('');
  };

  const handleCheck = (id) => {
    // use map to go through items and find matching id
    const items = listItems.map((items) => items.id === id ? {
      // when true load all items changing selected id's  check value to opposite value: ie true to false
      ...items, checked: !items.checked
    } : items);
    // save new item state to state
    setAndSave(items);
    // save to local storage

  }

  const deleteItem = (id) => {
    // use filter to make you list with onle required items
    const filteredlist = listItems.filter((items) => items.id !== id)
    setAndSave(filteredlist)
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
        newItems={newItems}
      />
      <SearchItem
        search={search}
        setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading Items....</p>}
        {fetchErr && <p style={{ color: "red", fontSize: "2rem" }} > {`Error: ${fetchErr}`}</p>}
        {!fetchErr && !isLoading && <Lists
          listItems={listItems.filter(items => ((items.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />}
      </main>
      <Footer
        listItems={listItems} />
    </div>
  )
}

export default App