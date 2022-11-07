import React, { useState } from 'react'
import BurguerButton from './BurguerButton'
import CartWitdget from './CartWitdget'


function NavBar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
      <div className='NavContainer'>
        <h2>PRI<span>MAL</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="#h">Home</a>
          <a href="#h">Shop</a>
          <a href="#h">About</a>
          <a href="#h">Contact</a>
          <a href="#h">Blog</a>
        </div>
        <div className='cart'>
          <CartWitdget/>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <div className={`BgDiv initial ${clicked ? ' active' : ''}`}></div>
      </div>
  )
}

export default NavBar