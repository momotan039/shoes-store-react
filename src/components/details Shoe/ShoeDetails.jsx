import React from 'react'
import { useLocation } from 'react-router-dom'
import './ShoeDetails.css'
export default function ShoeDeitals() {
    const location = useLocation()
    const dataShoe = location.state
    return (
         <div id='shoe-detials'>
            <div className='image' style={{ backgroundImage: `url(${dataShoe.image})` }} />
            <div className="detials">
               <div className="text">
               <h2>{dataShoe.name}</h2>
                <h2>cost shoe:<span>{dataShoe.price}$</span></h2>
                <h4>describe shoe:<span>{dataShoe.description}</span></h4>
               </div>
               <div className="buttons">
                    <button>Buy Now</button>
               </div>
            </div>
        </div>
    )
}
