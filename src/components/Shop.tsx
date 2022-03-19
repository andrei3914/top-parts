import React, { useState } from 'react'
import Footer from './Footer/Footer'
import Navigation from './Navigation/Navigation'
import parts from './assets/parts.json';
import Card from './Card/Card';

const Shop = () => {
  const [category,setCategoryory] = useState('all');

  const handleSpecific = (category: string) => {
    return parts.map(part => {
      if (category === 'all') {
        return (<Card
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

  return (
    <div>
        <Navigation />
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
        </div>
        <Footer />
    </div>
  )
}

export default Shop