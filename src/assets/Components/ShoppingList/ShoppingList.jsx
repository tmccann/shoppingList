import { useState } from "react";
import "./shoppingList.css";
import { FaTrashAlt} from "react-icons/fa"

const ShoppingList = () => {
  const [items, setItems] = useState([
    {id: 1,
    checked: false,
    item: "mushrooms with creamy garlic sauce monkey elephant cheese"},

    {id: 2,
      checked: false,
      item: "beans"},

    {id: 3,
    checked: false,
    item: "rice"},

    {id: 4,
    checked: false,
    item: "pasta"},

    
  ])

  const handleCheck = (id) =>{
    // use map to go through items and find matching id
    const listItems = items.map((items)=> items.id === id ? {
    // when true load all items changing selected id's  check value to opposite value: ie true to false
      ...items, checked: !items.checked}: items);
    // save new item state to state
      setItems(listItems);
    // save to local storage
      localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }

  const deleteItem = (id) =>{
    console.log(id)
    // create new array with all items that do not equal id
    const listItems = items.filter((item)=> item.id !== id);
    setItems(listItems)
    localStorage.setItem('shoppingList', JSON.stringify(listItems));
   
  }
  

  return (

    <div className="wrap-list"> 
      {items.length ? (
          <ul className="list">
            {items.map((item) => (
              <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={()=> handleCheck(item.id)}
                checked={item.checked}
              />
              <label
                style={(item.checked) ? {textDecoration:'line-through'}:null}
              // double click does not show if dev tools open
                onDoubleClick ={() => handleCheck(item.id)}
              >{item.item}</label>
              <FaTrashAlt onClick={() => deleteItem(item.id)}
                    role="button" 
                    tabIndex="0"
              />
              </li>
            )) }
              
          </ul>
      ):(
        <p style={{fontSize: '2rem', textAlign: 'center', margin: 'auto'}}>your list is empty</p>
      )} 
    </div>
  );
};

export default ShoppingList;
