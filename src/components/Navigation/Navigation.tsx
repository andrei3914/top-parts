import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCartLine } from 'react-icons/ri'

type Props = {
  setShowCart: React.Dispatch<React.SetStateAction<string>>
}

const Navigation: React.FC<Props> = ({ setShowCart }) => {

  return (
    <div className='navigation'>
        <p className='navTitle'>
            <Link to='/' className='link'>Top Parts</Link>
        </p>
        <div className='nav-rightSide'>
            <p>
                <Link to='/shop' className='link'>Shop!</Link>
            </p>
            <RiShoppingCartLine className='cartIcon' onClick={() => setShowCart('block')}/>
        </div>
    </div>
  )
}

export default Navigation