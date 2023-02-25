import { useState } from 'react'
import { SHOES } from '../../utils/crud.mjs'
import Shoe from '../shoe/Shoe'
import './Cart.css'
import { FaShoppingBag } from 'react-icons/fa'
export default function Cart() {
    const getItems=(arr)=>arr.map((n)=>SHOES.find(f=>f.id===n))
    const [arr,setArr]=useState(['5','6','7','8'])
    const [selectedShoes,setSelectedShoes]=useState(getItems(arr))
    const getTotall=()=>{
        const total= selectedShoes.reduce((p,c)=>{
            return p+Number(c.price)
        },0)
        if(total)
        return `Total:${total}$`
    }
    const removeItemFromCart=(id)=>{
        setArr([...arr.filter(f=>f!==id)])
        setSelectedShoes(getItems(arr))
    }
    
  return (
    <div className="cart">
        <h1 className='main-title'>Cart {getTotall()}</h1>
        {
                selectedShoes.length>0?
                <>
                    <div className="items">
                    {
                    selectedShoes.map((s,i)=>{
                        return  <Shoe cartOption={{removeMe:()=>removeItemFromCart(s.id)}} data={s} key={i} />
                      })
                }
                    </div>
                <button> <FaShoppingBag/> CheckOut Now  <FaShoppingBag/></button>
                </>:<h1>The Cart Empty</h1>
        }
    </div>
  )
}
