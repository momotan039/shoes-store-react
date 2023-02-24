import { Link } from "react-router-dom";
import {MdAttachMoney} from 'react-icons/md'
import './Shoe.css'
export default function Shoe({data}){
    return <div className="shoe">
        <Link state={data} to={'/shoe-details/'+data.name}>
        <h3 className="title">{data.name}</h3>
        <img src={data.image}/>
        <h3 className="price">{data.price}<MdAttachMoney/></h3>
        </Link>
    </div>
}