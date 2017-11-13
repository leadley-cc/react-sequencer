import React from 'react'
import './Header.css'
import logo from '../logo.svg'

const Header = (props) => (
  <header className='Header'>
    <div className='Title-div'>
      <img src={logo} className='Title-logo' alt='logo' />
      <h1 className='Title'>React Sequencer</h1>
    </div>
    {props.children}
  </header>
)

export default Header
