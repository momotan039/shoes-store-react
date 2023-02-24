import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { putShoe } from "../../../utils/crud.mjs"
import { rootRefs } from "../../../utils/local.mjs"
import GridSpinner from "../../spinner/GridSpinner.jsx"
import ControlPanelShoe from "./ControlPanelShoe.jsx"
export default function EditShoe() {
  const shoe = useLocation().state
  const [formData,setFormData]=useState(shoe)
  const changeData=(e)=>{
    const{name,value}=e.target
    setFormData({...formData,[name]:value})
  }
  const [isEditing,setIsEditing]=useState(false)
  const editShoe=async()=>{
    const res = confirm("do you want to complete");
    if (!res)
        return
    setIsEditing(true)
    await putShoe(formData)
    setIsEditing(false)
    rootRefs.reCallData()
  }
  return (
   <>
   {
    isEditing&&<GridSpinner/>
   }
    <ControlPanelShoe formDataObj={{set:setFormData,value:formData}} btnClick={editShoe} btnText='Edit' />
   </>
  )
}
