import { useState } from 'react'
import { POPUP } from '../../utils/local.mjs'
import { AiOutlineClose } from 'react-icons/ai'
import './PopUp.css'
import { MdOutlineTagFaces } from 'react-icons/md'
export default function PopUp() {
    const [isShow,setIsShow]=useState(false)
    const [isShowIcon,setIsShowIcon]=useState(true)
    const [message,setMessage]=useState("Complete")
    const [showComplete,setShowComplete]=useState("Complete")
    POPUP.setShow=setIsShow
    POPUP.setMessage=setMessage
    POPUP.setShowIcon=setIsShowIcon
    POPUP.setShowComplete=setShowComplete
    if(isShow)
  return (
    <div className="container-Popup">
        <div className="popup enable-scal">
            {
                isShowIcon&&
                <MdOutlineTagFaces color='red' size={120}/>
            }
            <h3>{message}</h3>
            <div className="controls">
                <button className='closeBtn' onClick={()=>setIsShow(false)}><AiOutlineClose size={30}/></button>
                {
                    showComplete&&
                    <button onClick={POPUP.complete}>Complete</button>
                }
                {/* <button onClick={()=>setIsShow(false)}>Close</button> */}
            </div>
        </div>
    </div>
  )
}
