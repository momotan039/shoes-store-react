import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { postShoe, putShoe } from "../../../utils/crud.mjs"
import { rootRefs } from "../../../utils/local.mjs"
import GridSpinner from "../../spinner/GridSpinner.jsx"
import ControlPanelShoe from "./ControlPanelShoe.jsx"
export default function AddShoe() {
  const [formData,setFormData]=useState({})
  const [isAdding,setIsAdding]=useState(false)
  const isALLFilled=()=>{
    if(!formData.name)
    return false
    if(!formData.price)
    return false
    if(!formData.description)
    return false
    if(!formData.image)
    return false
    return true
  }
  const addShoe=async()=>{
    //Check if all inputs are filled
    if(!isALLFilled())
    return
    const res = confirm("do you want to complete");
    if (!res)
        return

    setIsAdding(true)
    await postShoe(formData)
    setIsAdding(false)
    rootRefs.reCallData()
  }
  return (
   <>
   {
    isAdding&&<GridSpinner/>
   }
    <h1 className="main-title">Add New Shoe</h1>
     <ControlPanelShoe formDataObj={{set:setFormData,value:formData}} btnClick={addShoe} btnText='Add' />
   </>
  )
}
