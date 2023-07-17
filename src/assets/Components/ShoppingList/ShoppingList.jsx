import AddItem from "../AddItem/AddItem";
import "./shoppingList.css";
import { FaTrashAlt} from "react-icons/fa";


const ShoppingList = ({items,handleCheck, deleteItem}) => {
  

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
