import React from 'react'

interface Props {
    id: number,
    name: string,
    price: string,
    image: string
}

const Card: React.FC<Props> = ({ id, name, price, image }) => {
  return (
    <div className='productCard'>
        <div className="imgContainer">
            <img src={image} alt="productImage" />
        </div>
        <p className='cardTitle'>{name}</p>
        <p className="productPrice">{price}</p>
        <button>Add to Cart</button>
    </div>
  )
}

export default Card