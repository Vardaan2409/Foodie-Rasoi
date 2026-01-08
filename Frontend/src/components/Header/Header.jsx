import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="header-content">
        <h2>Order your favourite food here</h2>
        {/* <p>Choose from a deverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p> */}
        <p>Enjoy the comfort of Indian home-style flavours, prepared with wholesome ingredients and healthier choices, bringing you taste and nourishment in every bite.
Thoughtfully cooked to honor tradition while supporting a balanced, modern lifestyle.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
