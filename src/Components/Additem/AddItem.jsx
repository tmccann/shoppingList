import React from 'react'
import './addItem.css'
import { FaPlus } from 'react-icons/fa';

const Additem = ({ handleSubmit, setNewItems, newItems }) => {
  
  return (
    <form className='addItemForm' onSubmit={handleSubmit}>
    <label htmlFor='addItem'>Add Item</label>
    <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value={newItems}
        onChange={(e) => setNewItems(e.target.value)}
    />
    <button
        type='submit'
        aria-label='Add Item'
    >
        <FaPlus className='plus'/>
    </button>
</form>
  )
}

export default Additem