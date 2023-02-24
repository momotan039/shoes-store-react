import { useLocation } from 'react-router-dom'
import { SHOES } from '../../utils/crud.mjs'
import Shoe from '../shoe/Shoe'
import  './Shoes.css'
export default function Shoes() {

  const shoes=SHOES
    return <div className="shoes">
        {
         shoes.map((s,i)=>{
          return <Shoe data={s} key={i}/>
      })
        }
    </div>
}