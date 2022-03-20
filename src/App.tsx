import React, { useState } from 'react';
import './App.css';
import CarWheels from './components/CarWheels/CarWheels';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

function App() {
  const [showCart, setShowCart] = useState('none');

  return (
    <div className="App">
      <Navigation setShowCart={setShowCart}/>
      <div className='appBody'>
        <CarWheels />
      </div>
      <Footer />
    </div>
  );
}

export default App;
