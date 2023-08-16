import './App.css';
import Header from './Components/Header/Header';
import Lists from './Components/List/Lists';
import Footer from './Components/Footer/Footer';
import { useState, useEffect } from 'react';
import Additem from './Components/Additem/AddItem';
import SearchItem from './Components/Search/SearchItem';
import apiRequests from './apiRequests';


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

  // const setAndSave = (newItems) => {
  //   setListItem(newItems);
  //   localStorage.setItem('shoppingList', JSON.stringify(newItems));
  // }

  
    const addItems = async (item) => {
      const id = listItems.length ? listItems[listItems.length - 1].id + 1 : 1;
      const addItem = { id, checked: false, item };
      console.log(addItem);
      const updatedListItems = [...listItems, addItem];
      setListItem(updatedListItems);
      setNewItems('');
  
      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addItem) 
            };
  
      try {
        const result = await apiRequests(API_URL, postOptions);
        console.log('API POST response:', result);
      } catch (error) {
        console.error('Error posting data:', error);
      }
    };
  

    const handleCheck = async (id) => {
      // Use map to go through items and find matching id
      const updatedItems = listItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
    
      // Update the state with the new list of items
      setListItem(updatedItems);
    
      // Find the item with the specified id in the list
      const selectedItem = listItems.find((item) => item.id === id);
    
      // Prepare the PATCH request options
      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ checked: selectedItem.checked }),
      };
    
      try {
        const reqUrl = `${API_URL}/${id}`;
        const result = await apiRequests(reqUrl, updateOptions);
        console.log('API PATCH response:', result);
      } catch (error) {
        console.error('Error patching data:', error);
      }
    };
    
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