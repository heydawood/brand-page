import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='container'>
        <div className='logo'>
            <img src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul>
            <li href='#'>MENU</li>
            <li href='/loction'>LOCATION</li>
            <li href='/about'>ABOUT</li>
            <li href='/contact'>CONTACT</li>
        </ul>
        <button>Login</button>
      </nav>
    </div>
  )
}

export default Header
