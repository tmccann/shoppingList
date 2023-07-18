import { FaPlus } from "react-icons/fa"
import './addItem.css'

const AddItem = () => {

  const addItem = (e) =>{
    e.preventDefault

  }
  return (
    <div className="shadowContainer">
    <form className='addItemForm' onSubmit={{handleSubmit}}>
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e) => setnewItem(e.target.value)}
        />
        <button 
            type='submit'
            aria-label='Add Item'
        >
        <FaPlus className="plus work"/>
        </button>

    </form>
    </div>
  )
}

export default AddItem
