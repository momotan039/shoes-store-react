import {  useState } from 'react'
import { Link} from 'react-router-dom'
import {  DeleteShoe, SHOES } from '../../utils/crud.mjs'
import { rootRefs } from '../../utils/local.mjs'
import GridSpinner from '../spinner/GridSpinner.jsx'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import{MdPreview} from 'react-icons/md'
import './ManageShoes.css'
export default function ManageShoes() {

    const [shoes, setShoes] = useState(SHOES)
    const [isDeleting,setIsDeleting]=useState(false)
    const deleteMe = async (id) => {
        const res = confirm("do you want to complete");

        if (!res)
            return

        setIsDeleting(true)
        await DeleteShoe(id)
        const gms = await rootRefs.reCallData()
        setIsDeleting(false)
        setShoes(gms)
    }

   
    return (
        <div className="manage-shoes">
            {
                isDeleting&&<GridSpinner/>
            }
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>image</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoes && shoes.map((s, i) => {
                            return <tr key={i}>
                                <td>{s.name}</td>
                                <td>{s.price}$</td>
                                <td><textarea disabled>{s.description}</textarea></td>
                                <td><img width={100} src={s.image} /></td>
                                <td>
                                    
                                    <button className='showbtn'><Link state={s} to={`/shoe-details/${s.name}`}><MdPreview size={30}/></Link></button>
                                    <button><Link state={s} to={'/admin-dashboard/edit'}><FaEdit size={30}/></Link></button>
                                    <button onClick={() => deleteMe(s.id)}><FaTrashAlt size={30} color='red'/></button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
