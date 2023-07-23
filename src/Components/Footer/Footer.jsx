import React from 'react'
import './footer.css'

const Footer = ({ listItems }) => {

  return (
    <footer className='footer'>
      { listItems.length === 1 ? 
        (<span>you have 1 item in your list</span>):
        <span>you have {listItems.length} items in your list</span>
        }



    </footer> 
  )
}

export default Footer