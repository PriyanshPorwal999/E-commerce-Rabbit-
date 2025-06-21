import React from 'react'
import TopBar from '../Layout/TopBar'
import NavBar from './Navbar'

const Header = () => {
  return (
    <header className='border-b border-gray-200'>
      {/* Top Bar */}
      <TopBar />
      {/* Nav Bar */}
      <NavBar />
    </header>
  )
}

export default Header