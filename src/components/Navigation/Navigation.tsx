import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri'

const Navigation = () => {
  return (
    <div className='navigation'>
        <p className='navTitle'>
            <Link to='/' className='link'>Top Parts</Link>
        </p>
        <div className='nav-rightSide'>
            <p>
                <Link to='/shop' className='link'>Shop!</Link>
            </p>
            <RiShoppingCartLine />
        </div>
    </div>
  )
}

export default Navigation