import React from 'react';
import './App.css';
import CarWheels from './components/CarWheels/CarWheels';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='appBody'>
        <CarWheels />
      </div>
      <Footer />
    </div>
  );
}

export default App;
