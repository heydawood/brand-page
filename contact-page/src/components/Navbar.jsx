import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <img src="images/brand_logo.png" alt="logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar
