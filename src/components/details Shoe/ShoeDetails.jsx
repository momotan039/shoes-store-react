import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { SHOES } from '../../utils/crud.mjs'
import { rootRefs, saveUserinLocalStoarge } from '../../utils/local.mjs'
import './ShoeDetails.css'
export default function ShoeDeitals() {
    const params = useParams()
    const dataShoe = SHOES.find(f=>f.name===params.name)
    const [isInCart,setIsInCart]=useState(rootRefs.currentUser.inCart.includes(dataShoe.id))
    const addMeToCart=()=>{
        const user=rootRefs.currentUser
        user.inCart.push(dataShoe.id)
        saveUserinLocalStoarge(user)
        setIsInCart(true)
    }
    return (
         <div className='enable-scal'  id='shoe-detials'>
            <div className='image' style={{ backgroundImage: `url(${dataShoe.image})` }} />
            <div className="detials">
               <div className="text">
               <h2>{dataShoe.name}</h2>
                <h2>cost shoe:<span>{dataShoe.price}$</span></h2>
                <h4>describe shoe:<span>{dataShoe.description}</span></h4>
               </div>
               <div className="buttons">
                {
                  !isInCart?<button onClick={addMeToCart}>Buy Now</button>:<h2>This product already exist in cart</h2>
                }
               </div>
            </div>
        </div>
    )
}
