import { FaPlus } from "react-icons/fa"
import './addItem.css'

const AddItem = () => {

  const addItem = (i) =>{
    console.log(i)

  }
  return (
    <div className="shadowContainer">
    <form className='addItemForm'>
        <label htmlFor='addItem'>Add Item</label>
        <input
            autoFocus
            id='addItem'
            type='text'
            placeholder='Add Item'
            required
            // value={newItem}
            // onChange={(e) => setnewItem(e.target.value)}
        />
        <button 
            type='submit'
            aria-label='Add Item'
            onClick={addItem((i) => (i.value))}
        >
        <FaPlus className="plus work"/>
        </button>

    </form>
    </div>
  )
}

export default AddItem
