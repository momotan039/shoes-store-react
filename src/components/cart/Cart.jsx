import { useState } from 'react'
import { SHOES } from '../../utils/crud.mjs'
import Shoe from '../shoe/Shoe'
import './Cart.css'
import { FaShoppingBag } from 'react-icons/fa'
import { rootRefs, saveUserinLocalStoarge } from '../../utils/local.mjs'
export default function Cart() {
    const user=rootRefs.currentUser
    const getShoes = () => {
        return user.inCart.map((n) => SHOES.find(f => f.id === n))
    }

    const getTotall = () => {
        const total = selectedShoes.reduce((p, c) => {
            return p + Number(c.price)
        }, 0)
        if (total)
            return `Total:${total}$`
    }
    const removeItemFromCart = (id) => {
        user.inCart=user.inCart.filter(f => f !== id)
        setSelectedShoes(getShoes())
        saveUserinLocalStoarge(user)
    }

    const completeCheckOut=()=>{
        user.inCart=[]
        saveUserinLocalStoarge(user)
        setSelectedShoes(getShoes())
        alert("purchase completed successfully")
    }

    const [selectedShoes, setSelectedShoes] = useState(getShoes())

    return (
        <div className="cart">
            <h1 className='main-title'>Cart {getTotall()}</h1>
            {
                selectedShoes.length > 0 ?
                    <>
                        <div className="items">
                            {
                                selectedShoes.map((s, i) => {
                                    return <Shoe cartOption={{ removeMe: () => removeItemFromCart(s.id) }} data={s} key={i} />
                                })
                            }
                        </div>
                        <button onClick={completeCheckOut} className='checkout-btn'> <FaShoppingBag /> CheckOut Now  <FaShoppingBag /></button>
                    </> : <h1>The Cart Empty</h1>
            }
        </div>
    )
}
