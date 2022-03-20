import React from 'react'

interface Props {
    name: string,
    quantity: number
}

const CartItem: React.FC<Props> = ({ name, quantity }) => {
  return (
    <div className='cartItemDiv'>
        <p>{name}</p>
        <div className='cartItemButtons'>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>
    </div>
  )
}

export default CartItem