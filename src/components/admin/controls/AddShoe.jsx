import { useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { postShoe, putShoe } from "../../../utils/crud.mjs"
import { isALLFilled, POPUP, rootRefs } from "../../../utils/local.mjs"
import GridSpinner from "../../spinner/GridSpinner.jsx"
import ControlPanelShoe from "./ControlPanelShoe.jsx"
export default function AddShoe() {
  const [formData,setFormData]=useState({})
  const [isAdding,setIsAdding]=useState(false)

  const addShoe=async()=>{
   
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
    
        setIsAdding(true)
        await postShoe(formData)
        setIsAdding(false)
    
        POPUP.show({
          message:'the shoe added Sucessfully',
          showIcon:true
        })
        rootRefs.reCallData()
      }
    })
   
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
