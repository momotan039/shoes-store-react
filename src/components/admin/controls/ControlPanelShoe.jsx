import React from 'react'
import { Link } from 'react-router-dom'
import './controlPanelShoe.css'
export default function ControlPanelShoe({formDataObj,btnText,btnClick}) {
   
    const changeData=(e)=>{
        debugger
        const{name,value}=e.target
        formDataObj.set({...formDataObj.value,[name]:value})
      }

  return (
    <div className="control-panel-shoe center">
      <div className="image" style={{ backgroundImage: `url(${formDataObj.value.image})` }}></div>
      <div className="detials">
        <div className="row">
          <h3>Title:</h3>
          <input name="name"  type="text" onChange={changeData}  value={formDataObj.value.name} placeholder='Enter here the title' />
        </div>
       
        <div className="row">
          <h3>Price:</h3>
          <input  name="price"  type="text" onChange={changeData} value={formDataObj.value.price} placeholder='Enter here the price' />
        </div>

        <div className="row">
          <h3>Description:</h3>
          <input  name="price"  type="text" onChange={changeData} value={formDataObj.value.description} placeholder='Enter here the description' />
        </div>


        <div className="row">
        <h3>Image:</h3>
        <input name="image" type="text"   onChange={changeData} value={formDataObj.value.image} placeholder='Enter here the image'/>
        </div>

        <div className="contorls">
          <Link to='/admin-dashboard/manage-shoes'><button>Close</button></Link>
          <button onClick={btnClick}>{btnText}</button>
        </div>

      </div>
    </div>
  )
}
