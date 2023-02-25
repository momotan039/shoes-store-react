import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { putShoe } from "../../../utils/crud.mjs"
import { isALLFilled, POPUP, rootRefs } from "../../../utils/local.mjs"
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
    
    //Check if all inputs are filled
    if(!isALLFilled(formData))
    {
      POPUP.show({
        message:'Please Fill all the inputs',
        showIcon:false
      })
      return
    }
    

    POPUP.show({
      message:'do you want to complete?',
      showComplete:true,
      onComplete:async ()=>{
        if (!POPUP.clickedComplete)
        return
        
        setIsEditing(true)
        await putShoe(formData)
        setIsEditing(false)
    
        POPUP.show({
          message:'the shoe Edited Sucessfully',
          showIcon:true
        })
        rootRefs.reCallData()
      }
    })
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
