import React from 'react'

interface Props {
    id: number,
    name: string,
    quantity: number,
    handleIncrement: (id: number) => void,
    handleDecrement: (id: number) => void
}

const CartItem: React.FC<Props> = ({ id, name, quantity, handleIncrement, handleDecrement }) => {
  return (
    <div className='cartItemDiv'>
        <p>{name}</p>
        <div className='cartItemButtons'>
            <button onClick={() => handleDecrement(id)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => handleIncrement(id)}>+</button>
        </div>
    </div>
  )
}

export default CartItem