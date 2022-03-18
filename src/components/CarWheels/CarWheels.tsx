import React from 'react'
import carBody from '../assets/car_body.webp';
import carWheel from '../assets/wheel.png';

const CarWheels = () => {
  return (
    <div className='carWheelDiv'>
        <img src={carBody} alt="carBody" className='carBody'/>
        <img src={carWheel} alt="carWheelFront" className='carWheel1'/>
        <img src={carWheel} alt="carWheelBack" className='carWheel2'/>
    </div>
  )
}

export default CarWheels