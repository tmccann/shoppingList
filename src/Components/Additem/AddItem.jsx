import React from 'react'
import './addItem.css'
import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react'

const Additem = ({ handleSubmit, setNewItems, newItems }) => {
  const inputRef = useRef()
  
  return (
    <form className='addItemForm' onSubmit={handleSubmit}>
    <label htmlFor='addItem'>Add Item</label>
    <input
        autoFocus
        ref={inputRef}
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
        onClick={()=> inputRef.current.focus()}
    >
        <FaPlus className='plus'/>
    </button>
</form>
  )
}

export default Additem