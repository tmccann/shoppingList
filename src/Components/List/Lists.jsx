import React from 'react'
import './lists.css'
import {FaTrashAlt} from 'react-icons/fa'

const Lists = ( {listItems, handleCheck, deleteItem, reqUl} ) => {
  return (
    <section className='wrap-list'>
      {/* check listItems state has values */}
      {listItems.length 
      // if true create unordered list
      ? (
          <ul className='list'>
            {listItems.map((item) => (
    
      // map through items held in listitems state and create a list item for each
              <li className="item" key={item.id}> 
      {/* create checkbox to mark of done items */}
              <input
                type="checkbox"
                onChange={() => {
                  handleCheck(item.id);
                }}
                
                checked={item.checked}
              />
              <label
                style={(item.checked) ? {textDecoration:'line-through red' }:null}
              // double click does not show if dev tools open
                onDoubleClick ={() => handleCheck(item.id)}
              >{item.item}</label>
       {/*Create delete button  */}
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
    </section>
  )
}

export default Lists