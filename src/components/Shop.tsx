import React, { useState } from 'react'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import Parts from './assets/parts.json';
import Card from './Card/Card';
import CartItem from './CartItem/CartItem';

const Shop = () => {
  const [category,setCategoryory] = useState('all');
  const [parts, setParts] = useState(Parts);
  const [showCart, setShowCart] = useState('none');
  const [Clicked, setClicked] = useState(false);
  const [total, setTotal] = useState(0.00);

  //SHOP ROUTING ON CATEGORIES
  const handleSpecific = (category: string) => {
    return parts.map(part => {
      if (category === 'all') {
        return (<Card
          handleAddToCart={handleAddToCart}         
          id={part.id}
          key={part.id}
          name={part.name}
          image={part.image}
          price={part.price}
           />
          )
      }
      else if (category === part.category) {
       return (<Card
        handleAddToCart={handleAddToCart}       
        key={part.id}
        id={part.id}
        name={part.name}
        image={part.image}
        price={part.price}
         />
        )
      }   
    })
  }

  //ADD PRODUCT TO CART
  const handleAddToCart = (id: number) => {
    parts.forEach(part => {
      if(id === part.id && part.clicked === false) {
        part.clicked = true;
        setClicked(true);
        setTotal(total + parseFloat(part.price) * part.quantity);
      }
    })
  }

  //FINE TUNING PRODUCT QUANTITY IN CART 
  const handleIncrement = (id: number) => {
    parts.forEach(part => {
      if(id === part.id && part.clicked === true) {
        part.quantity += 1;
        setTotal(total + parseFloat(part.price));
      }
    })
  }

  const handleDecrement = (id: number) => {
    parts.forEach(part => {
      if(id === part.id && part.clicked === true) {
        part.quantity -= 1;
        setTotal(total - parseFloat(part.price));
        if (part.quantity === 0) {
          setClicked(false);
          part.clicked = false;
        }
      }
    })
  }

  return (
    <div>
        <Navigation setShowCart={setShowCart}/>
        <div className='shopBody'>
            <div className="shopMenu">
              <ul>
                <li onClick={() => setCategoryory('all')}>All products</li>
                <li onClick={() => setCategoryory('spark')}>Spark plugs</li>
                <li onClick={() => setCategoryory('spoiler')}>Spoilers</li>
                <li onClick={() => setCategoryory('wheels')}>Wheels</li>
                <li onClick={() => setCategoryory('turbo')}>Turbochargers</li>
              </ul>
            </div>
            <div className="products">
              {
                handleSpecific(category)
              }
            </div>
            <div className="cartDiv" style={{display: showCart}}>
              <div className="cartBody">
                {
                  parts.map(part => {
                    if (part.clicked === true)
                    {
                      return (
                      <CartItem 
                        key={part.id} 
                        name={part.name} 
                        quantity={part.quantity}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        id={part.id}/>
                    )}
                  })
                }
              </div>
              <div className="cartButtons">
                <p>{'Total: ' + total + ' €'}</p>
                <button>CHECKOUT</button>
                <button onClick={() => setShowCart('none')}>CLOSE</button>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Shop