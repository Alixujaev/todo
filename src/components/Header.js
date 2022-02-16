import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {


  return (
    <div className='header'>
        <h1 className='header_title'>ToDo List</h1>
        <div className='header_links'>
          <NavLink activeClassName='active' className='links' to={`/`}>Main</NavLink>
          <NavLink activeClassName='active' className='links' to={`/liked`}>Favorite</NavLink>
        </div>
    </div>
  )
}

export default Header